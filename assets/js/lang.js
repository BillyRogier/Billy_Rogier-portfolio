const language = document.getElementById("language");
null != getCookie("lang") || (document.cookie = "lang=fr;" + expires),
    language.addEventListener("click", () => {
        "fr" != getCookie("lang")
            ? (document.cookie = "lang=fr;" + expires)
            : (document.cookie = "lang=en;" + expires);
    });
