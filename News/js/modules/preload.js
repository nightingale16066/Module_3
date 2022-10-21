const img = document.createElement('img');
img.src = '../../img/preload.svg';
img.classList.add('preload');

export const preload = {

  circle: img,
  overlay: document.createElement('div'),

  show() {
    this.overlay.classList.add('overlay');
    this.overlay.append(this.circle);
    document.body.append(this.overlay);
  },
  remove() {
    this.overlay.remove();
  },
};

