import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log("iframe",iframe);
const player = new Player(iframe);
console.log("player", player);
// as in import =>
player.on('timeupdate', throttle(onPlay, 1000));

const curentTime = "videoplayer-current-time";

function onPlay ({ seconds }) {
  localStorage.setItem(curentTime, seconds)
}

function setCurrentTime(){
    if(!localStorage.getItem(curentTime)){
        return
    }
    player.setCurrentTime(localStorage.getItem(curentTime))
}
setCurrentTime()
