'use strict';

import 'fslightbox'
import Glide from '@glidejs/glide'

glideCarousel();

animateScaleButton();

openNavMenu();

function glideCarousel() {
	new Glide('.glide', {
		type: 'carousel',
		perView: 4,
		breakpoints: {
			1366: {
				perView: 3
			},
			1080: {
				perView: 2
			},
			860: {
				perView: 1
			}
		}
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

function openNavMenu() {
	const menuToggle = document.getElementById('menuToggle');
	const menu = document.querySelector('.main-nav .menu');

	menuToggle.onclick = () => {
		menu.classList.toggle('opened');
		menuToggle.classList.toggle('active');
	}
}