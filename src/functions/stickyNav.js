export default function stickyNav() {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navHeight = nav.getBoundingClientRect().height;

  const handleNav = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(handleNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);
}
