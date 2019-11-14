'use strict';

import 'fslightbox'
import Glide from '@glidejs/glide'

gliderCarousel();

animateScaleButton();

function gliderCarousel() {
	new Glide('.glide', {
		perView: 4,
		type: 'carousel'
	}).mount();
}


function animateScaleButton() {
	let scaleButton = document.querySelectorAll('.photos__scale');
	let photosImage = document.querySelectorAll('.photos__image');

	photosImage.forEach( (el, i) => {
		el.onmouseenter = () => {
			scaleButton[i].classList.add('hovered');
		};

		el.addEventListener('transitionend', () => {
			scaleButton[i].classList.remove('hovered');
		});
	});
};