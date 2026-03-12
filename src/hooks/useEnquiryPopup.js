import { useState, useEffect, useCallback, useRef } from 'react';
import { checkEnquirySubmission } from '../api/enquiry';

const POPUP_DELAYS = [20000, 300000, 900000]; // 20s, 5min (300s), 15min (900s)
const STORAGE_KEY = 'enquiryPopupState';
const MAX_POPUP_COUNT = 3;

const getStoredState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading enquiry popup state:', e);
  }
  return {
    courses: {},
    submissions: [],
  };
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving enquiry popup state:', e);
  }
};

const getCourseCount = (state, courseId) => {
  if (!courseId || !state.courses[courseId]) return 0;
  return state.courses[courseId].count || 0;
};

const useEnquiryPopup = (isEnabled = true, courseId = null) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupState, setPopupState] = useState(getStoredState);
  const [serverSubmissionChecked, setServerSubmissionChecked] = useState(false);
  const [hasServerSubmission, setHasServerSubmission] = useState(false);
  const timerRef = useRef(null);
  const mountedRef = useRef(true);
  const currentCourseIdRef = useRef(courseId);

  const currentCourseCount = getCourseCount(popupState, courseId);

  const hasSubmittedForCourse = useCallback((cId) => {
    return popupState.submissions.includes(cId) || hasServerSubmission;
  }, [popupState.submissions, hasServerSubmission]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    
    const cId = currentCourseIdRef.current;
    if (!cId) return;
    
    setPopupState((prev) => {
      const currentCount = getCourseCount(prev, cId);
      const newState = {
        ...prev,
        courses: {
          ...prev.courses,
          [cId]: {
            count: currentCount + 1,
            lastShown: new Date().toISOString(),
          },
        },
      };
      saveState(newState);
      return newState;
    });
  }, []);

  const markSubmitted = useCallback((cId) => {
    if (!cId) return;
    
    setPopupState((prev) => {
      if (prev.submissions.includes(cId)) return prev;
      
      const newState = {
        ...prev,
        courses: {
          ...prev.courses,
          [cId]: {
            count: MAX_POPUP_COUNT,
            lastShown: new Date().toISOString(),
          },
        },
        submissions: [...prev.submissions, cId],
      };
      saveState(newState);
      return newState;
    });
    setHasServerSubmission(true);
    setShowPopup(false);
  }, []);

  const dismissPopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  useEffect(() => {
    currentCourseIdRef.current = courseId;
  }, [courseId]);

  useEffect(() => {
    mountedRef.current = true;
    
    return () => {
      mountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setServerSubmissionChecked(false);
    setHasServerSubmission(false);
    
    if (!courseId) return;

    const checkServer = async () => {
      try {
        const response = await checkEnquirySubmission(courseId);
        if (mountedRef.current && currentCourseIdRef.current === courseId) {
          setHasServerSubmission(response.data.hasSubmitted);
          setServerSubmissionChecked(true);
        }
      } catch (error) {
        console.error('Error checking server submission:', error);
        if (mountedRef.current) {
          setServerSubmissionChecked(true);
        }
      }
    };

    checkServer();
  }, [courseId]);

  useEffect(() => {
    setShowPopup(false);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (!isEnabled || !courseId || !serverSubmissionChecked) {
      return;
    }

    if (hasServerSubmission) {
      return;
    }

    const courseCount = getCourseCount(popupState, courseId);

    if (courseCount >= MAX_POPUP_COUNT) {
      return;
    }

    if (popupState.submissions.includes(courseId)) {
      return;
    }

    const delay = POPUP_DELAYS[courseCount] || POPUP_DELAYS[POPUP_DELAYS.length - 1];

    timerRef.current = setTimeout(() => {
      if (mountedRef.current && currentCourseIdRef.current === courseId) {
        setShowPopup(true);
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isEnabled, courseId, popupState, serverSubmissionChecked, hasServerSubmission]);

  return {
    showPopup,
    closePopup,
    dismissPopup,
    markSubmitted,
    popupCount: currentCourseCount,
    hasSubmittedForCourse,
  };
};

export default useEnquiryPopup;
