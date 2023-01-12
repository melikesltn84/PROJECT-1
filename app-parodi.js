// const panels = document.querySelectorAll(".panel");

// for (let panel of panels) {
//   panel.addEventListener("click", () => {
//     disActive();
//     panel.classList.add("active");
//   });
// }

// const disActive = () => {
//   for (let panel of panels) {
//     panel.classList.remove("active");
//   }
// };

const panels = document.querySelector(".container");
const panel = document.querySelector(".panel");

for (let i = 0; i < panels.children.length; i++) {
  panels.children[i].addEventListener("click", () => {
    for (let panel = 0; panel < panels.children.length; panel++) {
      panels.children[panel].classList.remove("active");
    }

    panels.children[i].classList.add("active");
  });
}
