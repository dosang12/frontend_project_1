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
const containerbox = document.querySelector(".containerbox");
const leftButton = document.querySelector(".moveleft");
const rightButton = document.querySelector(".moveright");
containerbox.style.transition = "all 0.5s";
containerbox.style.transform = "translateX(0px);";

let scrollSize = 220; // 이동할 거리(박스의 너비와 margin-right의 합)
//최대이동거리
const destinyScroll = scrollSize * 3;
//클릭횟수
let count = 0;
//이동거리
let destiny;

leftButton.addEventListener("click", () => {
  count++;
  destiny = scrollSize * count;
  if (destiny >= destinyScroll) {
    destiny = 0;
  }
  containerbox.style.transform = "translateX(" + -destiny + "px)";
});

rightButton.addEventListener("click", () => {
  count--;
  destiny = scrollSize * count;
  if (destiny <= destinyScroll) {
    destiny = 0;
  }
  containerbox.style.transform = "translateX(" + -destiny + "px)";
});
//box slide end

//스크롤 이벤트 start
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
var mHtml = $("html");
var page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 7) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});
//스크롤 이벤트 end
