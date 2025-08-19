
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const menuData = [
  {
    id: "take-a-course",
    title: "Take a Course",
    description: "Exceptional course quality designed by the world's leading universities.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Popular courses",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Specialized courses",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Top educators",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      }
    ]
  },
  {
    id: "earn-a-certificate",
    title: "Earn a Certificate",
    description: " In 3-9 months, develop the skills to step into a new career or take your career to the next level.",
    buttonPath: "/courses/all",
    ButtonText: "View all certificates",
    sections: [
      {
        title: "Popular certificates",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Executive education",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Top educators",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
    ]
  },
  {
    id: "earn-a-degree",
    title: "Earn a Degree",
    description: "Complete accredited degree programs online.",
    buttonPath: "/courses/all",
    ButtonText: "View all degrees",
    sections: [
      {
        title: " Master's & Doctoral",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Bachelors",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      },
      {
        title: "Paths to degrees",
        items: [
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
          {
            image: "/images/gt-img.svg",
            institution: "The Georgia Institute of Technology",
            title: "Introduction to Analytics"
          },
        ]
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "business",
    title: "Business",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "physical-science",
    title: "Physical Science and Engineering",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "language-lerning",
    title: "Language Learning",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "arts-humanities",
    title: "Arts and Humanities ",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "social-science",
    title: "Social Science",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
  {
    id: "economics",
    title: "Economics",
    description: "Learn data analysis, machine learning, and more.",
    buttonPath: "/courses/all",
    ButtonText: "View all courses",
    sections: [
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University is",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      },
      {
        title: "Foundations",
        items: [
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
          {
            image: "/images/drop-courses.png",
            institution: "Johns Hopkins University",
            title: "Data Science"
          },
        ]
      }
    ]
  },
];

const MegaMenu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleItemHover = (itemId) => {
    setActiveItem(itemId);
    setIsMenuOpen(true);
    setShowOverlay(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setActiveItem(null);
    setShowOverlay(false);
  };

  const handleOverlayClick = () => {
    handleCloseMenu();
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const activeContent = menuData.find(item => item.id === activeItem) || menuData[0];

  return (
    <>
    
      <div className="explore-mega-menu ">
        <div className="explore-mega-menu-content wrapper ">
          <div className="explore-mega-menu-data flex flex-wrap">
            <div
              className={`menu-list drop-down-gradient text-white py-4 rounded-25 max-h-[65vh] md:max-h-[70vh] xl:max-h-[80vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-2xl capitalize font-medium px-6 text-left font-Poppins">
                Goals
              </p>
              <ul className="py-6 text-[px]">
                {menuData.slice(0, 3).map((item) => (
                  <li
                    key={item.id}
                    className={`menu-list-item  ${
                      activeItem === item.id ? "active" : ""
                    }`}
                    onMouseEnter={() => handleItemHover(item.id)}
                    onClick={() => handleItemHover(item.id)}
                  >
                    <span>{item.title}</span>
                    <span>
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.699251 0.599317C0.499251 0.799316 0.499251 0.999316 0.599251 1.29932L5.09925 7.99932L0.599251 14.6993C0.399251 14.8993 0.499251 15.1993 0.699251 15.3993C0.899251 15.5993 1.19925 15.5993 1.39925 15.3993L9.39925 8.39932C9.49925 8.29932 9.59925 8.19932 9.59925 7.99932C9.59925 7.79932 9.49925 7.69932 9.39925 7.59932L1.39925 0.599317C1.09925 0.499316 0.899251 0.499316 0.699251 0.599317Z"
                          fill="#BAB9B9"
                        />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-2xl capitalize font-medium px-6 text-left font-Poppins">
                Subjects
              </p>
              <ul className="py-6 text-[px] text-left ">
                {menuData.slice(3).map((item) => (
                  <li
                    key={item.id}
                    className={`menu-list-item ${
                      activeItem === item.id ? "active" : ""
                    }`}
                    onMouseEnter={() => handleItemHover(item.id)}
                    onClick={() => handleItemHover(item.id)}
                  >
                    <span>{item.title}</span>
                    <span>
                    <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.699251 0.599317C0.499251 0.799316 0.499251 0.999316 0.599251 1.29932L5.09925 7.99932L0.599251 14.6993C0.399251 14.8993 0.499251 15.1993 0.699251 15.3993C0.899251 15.5993 1.19925 15.5993 1.39925 15.3993L9.39925 8.39932C9.49925 8.29932 9.59925 8.19932 9.59925 7.99932C9.59925 7.79932 9.49925 7.69932 9.39925 7.59932L1.39925 0.599317C1.09925 0.499316 0.899251 0.499316 0.699251 0.599317Z"
                          fill="#BAB9B9"
                        />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/" className="btn-smpl border-white   mx-6 flex w-max text-sm font-Montserrat text-[#bab9b9] hover:text-white hover:bg-primaryColor hover:border-primaryColor"> Browse all subjects</Link>
            </div>

            {isMenuOpen && (
              <div className="menu-list-items  drop-down-gradien bg-white py-4 px-[22px] rounded-25 max-h-[65vh] md:max-h-[70vh] xl:max-h-[80vh] overflow-y-auto"
                data-aos="fade-down"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="close-menu size-5 flex justify-center items-center text-3xl  sticky z-20 -top-2 left-[100%] cursor-pointer" onClick={handleCloseMenu} >
                  &times;{" "}
                </div>

                <div className="menu-list-item-data">
                  <div className="items-header" data-aos="fade-down">
                    <div className="heading mb-[31px]">
                      <p className="text-[16px] text-[#111111] font-medium text-left font-Poppins ">
                        {activeContent.title}
                      </p>
                      <p className="text-left text-textColor text-xs">
                        {activeContent.description}
                      </p>
                    </div>

                    <div className="items-columns">
                      {activeContent.sections.map((section, index) => (
                        <div key={index} className="item-col">
                          <div className="col-heading text-lg md:text-[24px] mb-4 pb-[6px]  font-medium border-b-[0.5px] w-max text-left border-[#818181] border-opacity-50 font-Poppins text-[#111111]">
                            {section.title}
                          </div>
                          <div className="col-list">
                            <ul className="flex flex-col gap-y-1">
                              {section.items.map((item, itemIndex) => (
                                <Link key={itemIndex} to="#">
                                  <li className="col-list-item ">
                                    <span className="border border-slate-200 size-[50px] rounded-[4px] flex items-center">
                                      <img
                                        className="w-full"
                                        src={item.image}
                                        alt="course"
                                      />
                                    </span>
                                    <span className="ml-2">
                                      <p className="text-xs text-textColor">
                                        {item.institution}
                                      </p>
                                      <p className="text-sm font-medium font-Poppins text-[#111111]">
                                        {item.title}
                                      </p>
                                    </span>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/" className="btn-smpl normal-case btn-blue-transparent mt-6 flex w-max font-Montserrat">
                    {activeContent.ButtonText}
                  </Link>
                </div>
               
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
