const items = document.querySelectorAll(".accordian-item");
const toggles = document.querySelectorAll(".accordian-toggle");
const contents = document.querySelectorAll(".accordian-content");

toggles.forEach((t, index) => {
  t.addEventListener("click", (e) => {
    toggles.forEach((t, index) => {
      items[index].classList.remove("visible");
    });
    items[index].classList.add("visible");
  }, false);
});