(function() {
	document.addEventListener("DOMContentLoaded", function () {
		const popupElem = document.querySelector('.popup_banner'); 
		handlePopup(popupElem)
	})

	function handlePopup(elem) {
		if (typeof elem === "undefined") return
		
		const bannerCol = elem.querySelector('div');
		const closeBtn = document.createElement('button');
		closeBtn.textContent = '×';
		closeBtn.className = 'close-btn';
		bannerCol.insertAdjacentElement('afterend', closeBtn);
		
		setTimeout(() => {
			elem.classList.add(
				"animate__animated",
				"animate__bounceInUp",
				"triggered"
			)
		}, 500)

		function closePopup() {
			elem.classList.remove("animate__bounceInUp")
			elem.classList.add("animate__bounceOutDown")
		}

		closeBtn.addEventListener("click", closePopup)
	}
})();
