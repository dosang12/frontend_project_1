//sidenav start
function js() {
  const sections = document.querySelectorAll("section");
  const sidenav = document.querySelectorAll(".rightsidebar>li");
  function removeON(obj) {
    sidenav.forEach((o) => {
      o.classList.remove("on");
    });
  }
  sidenav.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstElementChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      removeON(sidenav);
      el.classList.add("on");
    });
  });
}
js();
//sidenav end

//box slide start
const container = document.querySelector(".containerbox");
const leftButton = document.querySelector(".moveleft");
const rightButton = document.querySelector(".moveright");

const scrollSize = 220; // 이동할 거리(박스의 너비와 margin-right의 합)

leftButton.addEventListener("click", () => {
  containerbox.scrollBy({
    left: -scrollSize,
    behavior: "smooth",
  });
});

rightButton.addEventListener("click", () => {
  containerbox.scrollBy({
    left: scrollSize,
    behavior: "smooth",
  });
});
//box slide end
