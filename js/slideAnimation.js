document.addEventListener('DOMContentLoaded', function () {
    const slideElements = document.querySelectorAll('.slideAnimation');
    const slideElements2 = document.querySelectorAll('.slideAnimation2');
    const slideElements3 = document.querySelectorAll('.slideAnimation3');
    const slideElements4 = document.querySelectorAll('.slideAnimation4');
    const slideElements5 = document.querySelectorAll('.slideAnimation5');
    const slideElementsLeft = document.querySelectorAll('.slideFromLeft');
    const slideElementsLeft2 = document.querySelectorAll('.slideFromLeft2');
    const slideElementsLeft3 = document.querySelectorAll('.slideFromLeft3');
    const slideElementsLeft4 = document.querySelectorAll('.slideFromLeft4');
    const popElements = document.querySelectorAll('.popOut');
    const rolledElement = document.querySelectorAll('.rolled');


    // Set up the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideIn');
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observer2 = new IntersectionObserver((entries2, observer2) => {
      entries2.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideIn2');
          observer2.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observer3 = new IntersectionObserver((entries3, observer3) => {
      entries3.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideIn3');
          observer3.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observer4 = new IntersectionObserver((entries4, observer4) => {
      entries4.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideIn4');
          observer4.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observer5 = new IntersectionObserver((entries5, observer5) => {
      entries5.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideIn5');
          observer5.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });


    // Set up the intersection observer for elements sliding in from the left
    const observerLeft = new IntersectionObserver((entries, observerLeft) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideInFromLeft');
            observerLeft.unobserve(entry.target); // Stop observing after animation is triggered
        }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observerLeft2 = new IntersectionObserver((entries, observerLeft2) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slideInFromLeft2');
          observerLeft2.unobserve(entry.target); // Stop observing after animation is triggered
        }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observerLeft3 = new IntersectionObserver((entries, observerLeft3) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slideInFromLeft3');
          observerLeft3.unobserve(entry.target); // Stop observing after animation is triggered
        }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    const observerLeft4 = new IntersectionObserver((entries, observerLeft4) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slideInFromLeft4');
          observerLeft4.unobserve(entry.target); // Stop observing after animation is triggered
        }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });



    // Set up the intersection observer for pop-out elements
    const observerPop = new IntersectionObserver((entries, observerPop) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('popIn');
          observerPop.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });



    // Set up the intersection observer
    const observerRolled = new IntersectionObserver((entries, observerRolled) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('roll-animate');
          observerRolled.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

  
    // Observe the elements
    slideElements.forEach(el => observer.observe(el));
    slideElements2.forEach(el => observer2.observe(el));
    slideElements3.forEach(el => observer3.observe(el));
    slideElements4.forEach(el => observer4.observe(el));
    slideElements5.forEach(el => observer5.observe(el));
    slideElementsLeft.forEach(el => observerLeft.observe(el));
    slideElementsLeft2.forEach(el => observerLeft2.observe(el));
    slideElementsLeft3.forEach(el => observerLeft3.observe(el));
    slideElementsLeft4.forEach(el => observerLeft4.observe(el));
    popElements.forEach(el => observerPop.observe(el));
    rolledElement.forEach(el => observerRolled.observe(el));
  });
  