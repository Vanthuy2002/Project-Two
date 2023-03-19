//srcoll menu
let header = document.querySelector(".header.fixed");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//action button
let btnLinks = document.querySelectorAll(".price-link");
btnLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnLinks.forEach((item) => {
      item.classList.remove("action");
    });
    btn.classList.add("action");
  });
});
