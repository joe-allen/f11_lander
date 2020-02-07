let objectFitImages = require('object-fit-images');
let objectFitVideos = require('object-fit-videos');
// import a from './test';

const videoContainer = document.querySelector('.video__vimeo');
const playBtn = document.querySelector('.video__btn-icon--js');
const closeBtn = videoContainer.querySelector('.video__close');
const iframe = videoContainer.querySelector('iframe');
const player = new Vimeo.Player(iframe);

playBtn.addEventListener('click', () => {
  openPlayer();
  videoContainer.classList.add('open');
});

const openPlayer = () => {
  videoContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  player.play();
}

closeBtn.addEventListener('click', () => {
  closePlayer();
  videoContainer.classList.remove('open');
});

const closePlayer = () => {
  videoContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
  player.pause();
}

window.addEventListener('DOMContentLoaded', () => {
  objectFitImages();
  objectFitVideos();
});

// YOURE RIGHT HERE JOE!
const cta = document.querySelectorAll('.cta__link');
const ctaWrap = document.querySelectorAll('.cta__wrap');
const tl = gsap.timeline({repeat: 25, yoyo: true});

tl.to(cta, {
  duration: 1,
  y: 0,
  scale: 1.025,
  opacity: 1
});

tl.to(ctaWrap, {
  duration: 1,
  y: 0,
  scale: 1.13,
  opacity: 1
}, 0);

tl.yoyo( true );