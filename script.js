// ハンバーガー

function hamburger() {
  const hamburger = document.querySelector("#js-hamburger"),
        hamburgerParent = document.querySelector("#js-l-header");

  hamburger.addEventListener("click" , function(){
    hamburgerParent.classList.toggle("nav-open");    
  });
};

hamburger();

// メインビジュアルフェード

const images = document.querySelectorAll("#js-fade-img");
let number = 0;

function fadeImg(){
  images[number].classList.remove("fade-img");
  number = (number + 1) % images.length;
  images[number].classList.add("fade-img");
}

setInterval(fadeImg , 5000);


// 選ばれる理由スライドイン
// 受講生の声ズームイン

const slideIns = document.querySelectorAll("#js__slide-in");
const zoomIns = document.querySelectorAll("#js__zoom-in");

const callback = function(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "js__slide-in") {
        entry.target.classList.add("slide-in");
      } else if (entry.target.id === "js__zoom-in") {
        entry.target.classList.add("zoom-in");
      }
      observer.unobserve(entry.target); // 必要に応じて監視を解除
    }
  });
};

const io = new IntersectionObserver(callback);

slideIns.forEach((slideIn) => {
  io.observe(slideIn);
});

zoomIns.forEach((zoomIn) => {
  io.observe(zoomIn);
});


// スクールの概要ループ背景

document.addEventListener("DOMContentLoaded", () =>{
  const repeatImg = document.querySelector("#js__repeat-img");

let backgroundX = 0,
    backgroundY = 0;

const speed = 1;


const repeatBackground = function(){
  backgroundX -= speed;
  backgroundY += speed;
  repeatImg.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
  requestAnimationFrame(repeatBackground);
};

repeatBackground();
});