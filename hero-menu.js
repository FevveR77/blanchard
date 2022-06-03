document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".container-top-menu__list__item__list__item__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container-top-menu__dropdown");
    
    document.querySelectorAll(".container-top-menu__list__item__list__item__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    document.querySelectorAll(".container-top-menu__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".container-top-menu__list__item__list")) {
    document.querySelectorAll(".container-top-menu__dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".container-top-menu__list__item__list__item__btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})