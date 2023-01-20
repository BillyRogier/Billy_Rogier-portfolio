const inputForm = document.querySelectorAll(".input-form");

inputForm.forEach((elt) => {
    elt.addEventListener("input", () => {
        if (elt.value != "") {
            elt.classList.add("active");
        } else {
            elt.classList.remove("active");
            elt.classList.add("invalid");
        }
    });
});

$(".contact_form").submit(function (event) {
    let val = 0;
    event.preventDefault();
    inputForm.forEach((elt) => {
        if (elt.value == "") {
            elt.classList.add("invalid");
            val += 1;
        }
    });
    if (val == 0) {
        $(".mail_btn").val("");
        $(".loader_mail").addClass("active");
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "contact_form.php",
            method: "post",
            data: form.serialize(),
            success: function (result) {
                setTimeout(function () {
                    $(".loader_mail").removeClass("active");
                    if (result == "success") {
                        if (lang == "fr") {
                            $(".mail_btn").val("Message bien envoyé !");
                        } else {
                            $(".mail_btn").val("Message send successfully !");
                        }
                        $(".input-form").val("");
                    } else {
                        $(".mail_btn").val("sending error !");
                    }
                    setTimeout(function () {
                        if (lang == "fr") {
                            $(".mail_btn").val("envoyé");
                        } else {
                            $(".mail_btn").val("send");
                        }
                    }, 2000);
                }, 1000);
            },
        });
    }
});
