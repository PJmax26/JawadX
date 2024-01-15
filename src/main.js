const light = document.querySelector(".light_btn");
const dark = document.querySelector(".dark_btn");
const app = document.querySelector("#app");

const setTheme = () => {
  light.addEventListener("click", () => {
    app.style.background = "white";
    app.style.color = "#191828";
  });
  dark.addEventListener("click", () => {
    app.style.background = "#191828";
    app.style.color = "white";
  });
};

export default setTheme;
