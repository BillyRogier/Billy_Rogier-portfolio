const darkLightToggle = document.getElementById("toggle_light");
function cookieMode() {
    let e = document.getElementById("logo");
    "on" == getCookie("mode")
        ? (document.documentElement.style.setProperty(
              "--background-color",
              "#E9E9E9"
          ),
          document.documentElement.style.setProperty("--text-color", "#050b29"),
          document.documentElement.style.setProperty(
              "--light-color",
              "#686464"
          ),
          (e.style.color = "#050b29"))
        : (document.documentElement.style.setProperty(
              "--background-color",
              "#050b29"
          ),
          document.documentElement.style.setProperty(
              "--light-color",
              "#bcb6b6"
          ),
          document.documentElement.style.setProperty("--text-color", "#E9E9E9"),
          (e.style.color = "#fff"));
}
window.addEventListener("load", cookieMode),
    darkLightToggle.addEventListener("click", () => {
        "on" == getCookie("mode")
            ? (document.cookie = "mode=off;" + expires)
            : (document.cookie = "mode=on;" + expires),
            cookieMode();
    });
