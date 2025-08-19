
import { useState, useEffect } from 'react';
import { IoIosArrowDropup } from 'react-icons/io'; 

const ScrollTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 260) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <IoIosArrowDropup
      onClick={scrollToTop}
      className={`bg-white cursor-pointer w-8 h-8 p-1 fixed bottom-10 right-4 z-50 shadow-lg transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default ScrollTopIcon;
