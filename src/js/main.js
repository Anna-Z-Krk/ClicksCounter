const popupAlert = document.querySelector(".modal-alert");
const btn = document.querySelector(".section-item__content-btn");
const closingX = document.querySelector(".modal-alert__btn");
const popupAlertArea = document.querySelector(".modal-alert__wrapper");
const popup = document.querySelector(".popup");
const clicks = document.querySelector(".modal-alert__clicks");
const resetBtn = document.querySelector(".modal-alert__btn-reset");
// let countedClicks = 0;
let countedClicks = parseInt(localStorage.getItem("btnClicksSaved") ?? "0");
const countingClicks = () => {
  countedClicks += 1;

  localStorage.setItem("btnClicksSaved", countedClicks);
  let savedClicks = localStorage.getItem("btnClicksSaved");

  clicks.innerHTML = `${savedClicks} times`;

  console.log(countedClicks + " counted");
  console.log(savedClicks + " local storage");

  if (savedClicks > 5) {
    resetBtn.style.display = "flex";
  } else {
    resetBtn.style.display = "none";
  }
};

const handleClick = (e) => {
  if (e.target.classList != "popup") return (popupAlert.style.display = "none");
  else popupAlert.style.display = "flex";
};

btn.addEventListener("click", function () {
  popupAlert.style.display = "flex";
  countingClicks();
});

closingX.addEventListener("click", function () {
  popupAlert.style.display = "none";
});

popupAlert.addEventListener("click", handleClick);

resetBtn.addEventListener("click", function () {
  clicks.innerHTML = `${(countedClicks = 0)} times`;
  localStorage.clear();
  // console.log(countedClicks + "reset counted");
});
