export default function handleHeaderBtn() {
  const btnScrollTo = document.querySelector(".btn--scroll-to");
  const section1 = document.querySelector("#section--1");

  btnScrollTo.addEventListener("click", function () {
    // const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: "smooth" });
  });
}
