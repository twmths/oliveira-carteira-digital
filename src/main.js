import "./style.css";
import handleModal from "./functions/handleModal";
import menuAnimation from "./functions/menuAnimation";
import handleImgs from "./functions/handleImgs";
import tabComponent from "./functions/tabComponent";
import handleSlider from "./functions/handleSlider";
import stickyNav from "./functions/stickyNav";
import revealSection from "./functions/revealSection";
import handleHeaderBtn from "./functions/handleHeaderBtn";
import pageNavigation from "./functions/pageNavigation";

const init = function () {
  handleModal();
  handleHeaderBtn();
  pageNavigation();
  menuAnimation();
  stickyNav();
  tabComponent();
  handleImgs();
  revealSection();
  handleSlider();
};

init();
