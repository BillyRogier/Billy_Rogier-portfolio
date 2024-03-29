const d = new Date()
d.setTime(d.getTime() + 1296e6)
let expires = ';path=/' + ';expires=' + d.toUTCString()
function getCookie(e) {
    return (deb = document.cookie.indexOf(e + '=')) >= 0
        ? ((deb += e.length + 1),
          (fin = document.cookie.indexOf(';', deb)) < 0 &&
              (fin = document.cookie.length),
          document.cookie.substring(deb, fin))
        : null
}
const darkLightToggle = document.getElementById('toggle_light')
function cookieMode() {
    let e = document.querySelector('#logo > img')
    'on' == getCookie('mode')
        ? (document.documentElement.style.setProperty(
              '--background-color',
              '#E9E9E9'
          ),
          document.documentElement.style.setProperty('--text-color', '#050b29'),
          document.documentElement.style.setProperty(
              '--light-color',
              '#686464'
          ),
          (e.src = 'https://billyrogier.com/assets/img/logo_light.svg'),
          console.log(e.src))
        : (document.documentElement.style.setProperty(
              '--background-color',
              '#050b29'
          ),
          document.documentElement.style.setProperty(
              '--light-color',
              '#bcb6b6'
          ),
          document.documentElement.style.setProperty('--text-color', '#E9E9E9'),
          (e.src = 'https://billyrogier.com/assets/img/logo.svg'))
}
window.addEventListener('load', cookieMode),
    darkLightToggle.addEventListener('click', () => {
        'on' == getCookie('mode')
            ? (document.cookie = 'mode=off;' + expires)
            : (document.cookie = 'mode=on;' + expires),
            cookieMode()
    })
const language = document.getElementById('language')
null != getCookie('lang') || (document.cookie = 'lang=fr;' + expires),
    language.addEventListener('click', () => {
        'fr' != getCookie('lang')
            ? (document.cookie = 'lang=fr;' + expires)
            : (document.cookie = 'lang=en;' + expires)
    })
