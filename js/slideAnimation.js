document.addEventListener('DOMContentLoaded', function () {
    const slideElements = document.querySelectorAll('.slideAnimation');
    const slideElementsLeft = document.querySelectorAll('.slideFromLeft');
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
    slideElementsLeft.forEach(el => observerLeft.observe(el));
    popElements.forEach(el => observerPop.observe(el));
    rolledElement.forEach(el => observerRolled.observe(el));
  });
  