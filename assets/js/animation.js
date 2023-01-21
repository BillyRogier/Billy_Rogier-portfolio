(document.onreadystatechange = function () {
    "complete" != document.readyState
        ? ((lodaer = !0),
          (circle.style.top = 0),
          (circle.style.left = 0),
          (loader.style.opacity = 1))
        : setTimeout(function () {
              (circle.style.transition = "1s"),
                  circle.classList.remove("active"),
                  (loader.style.opacity = 0),
                  setTimeout(function () {
                      (main.style.opacity = 1),
                          (navbar.style.opacity = 1),
                          (footer.style.opacity = 1),
                          (lodaer = !1),
                          (body.style.overflowY = "scroll"),
                          window.innerWidth > 768 && positionCircle(),
                          reveal(0),
                          slide_percentage();
                  }, 600);
          }, 1e3);
}),
    menu.addEventListener("click", menuAnimation);
for (var i = 0; i < links.length; i++)
    4 != i && links[i].addEventListener("click", menuAnimation);
window.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
        if (0 == window.scrollY && !1 == elementClick && !1 == lodaer) {
            circle.style.transition = "0s";
            let t = -(window.innerWidth / 2 - e.pageX) / 30,
                l = -(window.innerHeight / 2 - e.pageY) / 30;
            circle.style.transform = `translateY(${l}px) translateX(${t}px)`;
        }
    } else circle.style.transform = "translateY(0px) translateX(0px)";
}),
    window.addEventListener("scroll", scrollCircle),
    window.addEventListener("load", scrollCircle),
    window.addEventListener("resize", scrollCircle),
    window.addEventListener("load", revealScrollDown),
    window.addEventListener("resize", revealScrollDown),
    window.addEventListener("scroll", slide_percentage),
    window.addEventListener("scroll", function () {
        !0 != lodaer && reveal(200);
    }),
    window.addEventListener("resize", function () {
        reveal(0);
    });
