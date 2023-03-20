const section = document.querySelectorAll("section"),
	main = document.querySelector("main"),
	footer = document.querySelector("footer"),
	body = document.querySelector("body"),
	loader = document.getElementsByClassName("loader")[0],
	logo = document.getElementById("logo"),
	navbar = document.querySelector("nav"),
	navLinks = document.getElementById("nav_links"),
	links = document.getElementsByClassName("link"),
	menu = document.getElementById("menu_burger-check"),
	menuTitle = document.getElementById("menu_burger-title"),
	menuBar = document.querySelectorAll(".menu_burger-bar"),
	menu_bar1 = document.getElementsByClassName("menu_burger-bar")[0],
	menu_bar2 = document.getElementsByClassName("menu_burger-bar")[1],
	menu_bar3 = document.getElementsByClassName("menu_burger-bar")[2],
	chevronDown = document.getElementsByClassName("chevron_down")[0],
	scrollDown = document.getElementsByClassName("scroll_down")[0],
	circle = document.getElementById("circle_animation");
let elementClick = !1,
	lodaer = !0;
function positionCircle() {
	if (
		!/sylviebiscuitsetcie/.test(window.location.href) &&
		!/allocine/.test(window.location.href)
	) {
		window.scrollY < section[1].offsetTop - 70
			? ((circle.style.top = 0.35 * window.scrollY + "px"),
			  (circle.style.left =
					window.scrollY * (window.innerWidth / 3e3) + "px"))
			: window.scrollY >= section[1].offsetTop - 70 &&
			  window.scrollY < section[3].offsetTop + 70
			? ((circle.style.top =
					section[2].offsetTop -
					window.innerHeight / 0.565 +
					0.1 * window.scrollY +
					"px"),
			  (circle.style.left =
					window.innerHeight * (window.innerWidth / 1650) +
					-(window.scrollY * (window.innerWidth / 3e3)) +
					"px"))
			: ((circle.style.top =
					section[4].offsetTop -
					window.innerHeight / 0.74 -
					0.7 * window.scrollY +
					"px"),
			  (circle.style.left =
					-(window.innerHeight * (window.innerWidth / 402)) +
					window.scrollY * (window.innerWidth / 1500) +
					"px"));
	}
}
function revealScrollDown() {
	window.innerWidth <= 768
		? (chevronDown.classList.add("reveal"),
		  chevronDown.classList.add("slide_down"),
		  scrollDown.classList.remove("reveal"),
		  scrollDown.classList.remove("slide_left"),
		  scrollDown.classList.remove("active"))
		: (chevronDown.classList.remove("reveal"),
		  chevronDown.classList.remove("slide_down"),
		  chevronDown.classList.remove("active"),
		  scrollDown.classList.add("reveal"),
		  scrollDown.classList.add("slide_left"));
}
function slide_percentage() {
	if (!1 == lodaer)
		for (
			var e = document.querySelectorAll(".skills_data-line"),
				t = document.querySelectorAll(".skills_data-fit"),
				l = 0;
			l < e.length;
			l++
		) {
			var n,
				r = window.innerHeight;
			e[l].getBoundingClientRect().top < r - 150 &&
				!0 != lodaer &&
				(e[l].classList.add("active"), t[l].classList.add("active"));
		}
}
function reveal(e) {
	if (!1 == lodaer)
		for (
			var t = document.querySelectorAll(".reveal"), l = 0;
			l < t.length;
			l++
		) {
			var n,
				r = window.innerHeight;
			t[l].getBoundingClientRect().top < r - e &&
				t[l].classList.add("active");
		}
}
function menuAnimation() {
	if (
		((circle.style.transition = "1s"),
		circle.classList.remove("disaper"),
		(circle.style.transform = "translateY(0px) translateX(0px)"),
		"active" == circle.classList)
	) {
		if (
			/sylviebiscuitsetcie/.test(window.location.href) ||
			/allocine/.test(window.location.href)
		) {
			circle.classList.remove("active");
			circle.classList.add("disaper");
		} else {
			circle.classList.remove("active");
		}
		(navLinks.style.opacity = 0),
			(menu_bar1.style.transform = "translate(0, 0) rotate(0)"),
			(menu_bar2.style.opacity = 1),
			(menu_bar3.style.transform = "translate(0, 0) rotate(0)"),
			setTimeout(function () {
				(elementClick = !1),
					(navbar.style.backgroundColor = "var(--background-color)"),
					(navLinks.style.display = "none"),
					(main.style.opacity = 1),
					(footer.style.opacity = 1),
					(logo.style.opacity = 1),
					(menuTitle.style.opacity = 1);
				for (var e = 0; e < menuBar.length; e++)
					menuBar[e].style.backgroundColor = "var(--text-color)";
				if (
					(!/sylviebiscuitsetcie/.test(window.location.href) ||
						!/allocine/.test(window.location.href)) &&
					window.innerWidth > 768
				) {
					positionCircle();
				}
			}, 500);
	} else if (
		((elementClick = !0),
		(circle.style.top = 0),
		(circle.style.left = 0),
		(navLinks.style.display = "flex"),
		(0 != window.scrollY &&
			window.innerWidth > 768 &&
			!/sylviebiscuitsetcie/.test(window.location.href)) ||
			!/allocine/.test(window.location.href))
	)
		setTimeout(function () {
			(menu_bar1.style.transform = "translate(0, 20px) rotate(45deg)"),
				(menu_bar2.style.opacity = 0),
				(menu_bar3.style.transform =
					"translate(0, -8px) rotate(-45deg)"),
				(main.style.opacity = 0),
				(footer.style.opacity = 0),
				circle.classList.add("active"),
				(navLinks.style.opacity = 1),
				(navbar.style.backgroundColor = "transparent"),
				(logo.style.opacity = 0),
				(menuTitle.style.opacity = 0);
			for (var e = 0; e < menuBar.length; e++)
				menuBar[e].style.backgroundColor = "#fff";
		}, 500);
	else {
		(menu_bar1.style.transform = "translate(0, 20px) rotate(45deg)"),
			(menu_bar2.style.opacity = 0),
			(menu_bar3.style.transform = "translate(0, -8px) rotate(-45deg)");
		for (var e = 0; e < menuBar.length; e++)
			menuBar[e].style.backgroundColor = "#fff";
		(main.style.opacity = 0),
			(footer.style.opacity = 0),
			circle.classList.add("active"),
			(navLinks.style.opacity = 1),
			(navbar.style.backgroundColor = "transparent"),
			(logo.style.opacity = 0),
			(menuTitle.style.opacity = 0);
	}
}
function scrollCircle() {
	window.innerWidth > 768
		? ((circle.style.transition = "0s"),
		  !1 == elementClick && !1 == lodaer && positionCircle())
		: ((circle.style.top = 0), (circle.style.left = 0));
}
