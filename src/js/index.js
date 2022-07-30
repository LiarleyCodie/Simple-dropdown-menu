const themesButton = document.getElementById("themesButton");
const themesMenu = document.getElementById("themesMenu");

window.addEventListener("click", ({ target }) => {
	if (target === themesButton) {
		if (!themesMenu.classList.contains('active')) {
			themesMenu.style.animation = "showMenu 300ms ease backwards"
			themesMenu.classList.add("active")
		} else {
			themesMenu.style.animation = "hiddenMenu 300ms ease backwards"

			themesMenu.addEventListener("animationend", ({ animationName }) => {
				if (animationName === 'hiddenMenu') {
						themesMenu.classList.remove("active")
				}
			})
		}
	}

	if (target !== themesButton) {
		themesMenu.style.animation = "hiddenMenu 400ms ease backwards"

		themesMenu.addEventListener("animationend", ({ animationName }) => {
			if (animationName === 'hiddenMenu') {
					themesMenu.classList.remove("active")
			}
		})
	}
})
