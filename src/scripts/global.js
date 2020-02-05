import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';

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