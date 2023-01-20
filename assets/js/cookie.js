const d = new Date();
d.setTime(d.getTime() + 1296e6);
let expires = ";path=/" + ";expires=" + d.toUTCString();
function getCookie(e) {
    return (deb = document.cookie.indexOf(e + "=")) >= 0
        ? ((deb += e.length + 1),
          (fin = document.cookie.indexOf(";", deb)) < 0 &&
              (fin = document.cookie.length),
          document.cookie.substring(deb, fin))
        : null;
}
