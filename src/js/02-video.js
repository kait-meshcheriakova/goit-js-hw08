import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}

player.setCurrentTime(currentTime || 0);