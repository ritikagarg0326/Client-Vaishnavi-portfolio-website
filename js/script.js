const videoScroll = document.getElementById("videoScroll");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click", () => {
  videoScroll.scrollBy({ left: -350, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  videoScroll.scrollBy({ left: 350, behavior: "smooth" });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
