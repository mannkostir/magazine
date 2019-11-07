animateScaleButton();

function animateScaleButton() {
	let scaleButton = document.querySelectorAll('.photos__scale');

	scaleButton.forEach( (el) => {
		el.onmouseenter = () => {
			el.classList.add('hovered');
		};

		el.addEventListener('transitionend', () => {
			el.classList.remove('hovered');
		});
	});
};