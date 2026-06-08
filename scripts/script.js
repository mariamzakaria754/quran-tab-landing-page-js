import { clickLabelEvent, observeElements } from "./utils.js";

const labelElements = document.querySelectorAll(".faq__question");
const sectionElements = document.querySelectorAll("section");

labelElements.forEach(clickLabelEvent);

observeElements(sectionElements);
