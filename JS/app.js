const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

const filter_btns = document.querySelectorAll(".filter-button");
const elem = document.querySelector(".grid");

const records_wrap = document.querySelector(".records");
const record_circle = document.querySelectorAll(".record-circle");
const records_numbers = document.querySelectorAll(".number");

const footer_input = document.querySelector(".footer-input");


// -----------Home------------//
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
//---------------------------//


// --------Portfolio---------//
filter_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({
      filter: filterValue,
    });
  });
});
var iso = new Isotope(elem, {
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.7s",
});
//---------------------------//


// --------Records---------//
record_circle.forEach((rcds) => {
  rcds.addEventListener("click", () => {
    record_circle.forEach((rcd) => rcd.classList.remove("active-rcds"));
    rcds.classList.add("active-rcds");
  });
});
window.addEventListener("scroll", () => {
  countUp();
});
function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}
function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);
      
      if(currentNum < maxNum){
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      }
    };
    updateCount();
  });
}
// -------------------------//


// -----------Footer------------//
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus")
});

footer_input.addEventListener("blur", () => {
  if(footer_input.value != "") return;
  footer_input.classList.remove("focus")
});
// -----------------------------//
