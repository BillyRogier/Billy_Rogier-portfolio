;(document.onreadystatechange = function () {
    'complete' != document.readyState
        ? ((lodaer = !0),
          (circle.style.top = 0),
          (circle.style.left = 0),
          (loader.style.opacity = 1))
        : setTimeout(function () {
              ;(circle.style.transition = '1s'),
                  circle.classList.remove('active'),
                  circle.classList.add('disaper'),
                  (loader.style.opacity = 0),
                  setTimeout(function () {
                      ;(main.style.opacity = 1),
                          (navbar.style.opacity = 1),
                          (footer.style.opacity = 1),
                          (lodaer = !1),
                          (body.style.overflowY = 'scroll'),
                          window.innerWidth > 768,
                          reveal(0),
                          slide_percentage()
                  }, 600)
          }, 1e3)
}),
    menu.addEventListener('click', menuAnimation)
for (var i = 0; i < links.length; i++)
    4 == i && links[i].addEventListener('click', menuAnimation)
window.addEventListener('scroll', function () {
    !0 != lodaer && reveal(200)
})
window.addEventListener('resize', function () {
    reveal(0)
})
