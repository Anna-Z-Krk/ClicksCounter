const popupAlert = document.querySelector(".modal-alert");
const btn = document.querySelector(".section-item__content-btn");
const closingX = document.querySelector(".modal-alert__btn");
const popupAlertArea = document.querySelector(".modal-alert__wrapper");
const popup = document.querySelector(".popup");
const clicks = document.querySelector(".modal-alert__clicks");
let countedClicks = 0;

btn.addEventListener("click", function () {
  popupAlert.style.display = "flex";
});

closingX.addEventListener("click", function () {
  popupAlert.style.display = "none";
});

const handleClick = (e) => {
  if (e.target.classList != "popup")
    return (popupAlert.style.display = "none"), console.log(e.target);
  else popupAlert.style.display = "flex";
};
popupAlert.addEventListener("click", handleClick);

// No added function to reset amount of clicks with additional button, temporarly it's just reseting the value
btn.addEventListener(
  "click",
  (countringClicks = () => {
    countedClicks += 1;
    console.log(countedClicks);
    clicks.innerHTML = `${countedClicks} times`;
    if (countedClicks > 5) {
      clicks.innerHTML = `${(countedClicks = 1)} times`;
    }
  })
);
