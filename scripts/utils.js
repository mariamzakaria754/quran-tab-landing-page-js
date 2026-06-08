export const clickLabelEvent = (item) => {
  item.addEventListener("keydown", (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      item.click();
    }
  });
};

export const observeElements = (sectionElements) => {
  const options = {
    threshold: 0.2,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      // desired code /trigger
      if (entry.isIntersecting) {
        // console.log("In view");
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach((element, index) => {
    if (index % 2 === 0) {
      element.classList.add("left");
    } else {
      element.classList.add("right");
    }
    observer.observe(element);
  });
};
