
<template>
<div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
</template>
<style scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #212121;
    overflow: hidden;
}

.background span {
    width: 25vmin;
    height: 25vmin;
    border-radius: 25vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 49;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #73fe58;
    top: 52%;
    left: 21%;
    animation-duration: 6s;
    animation-delay: -10s;
    transform-origin: 21vw -19vh;
    box-shadow: 50vmin 0 6.45501372520846vmin currentColor;
}
.background span:nth-child(1) {
    color: #73fe58;
    top: 52%;
    left: 27%;
    animation-duration: 10s;
    animation-delay: -2s;
    transform-origin: -16vw 15vh;
    box-shadow: -50vmin 0 6.372595429204558vmin currentColor;
}
.background span:nth-child(2) {
    color: #58a0e4;
    top: 96%;
    left: 9%;
    animation-duration: 9s;
    animation-delay: -2s;
    transform-origin: 13vw 0vh;
    box-shadow: -50vmin 0 6.511216819711552vmin currentColor;
}
.background span:nth-child(3) {
    color: #73fe58;
    top: 63%;
    left: 33%;
    animation-duration: 8s;
    animation-delay: -8s;
    transform-origin: -17vw 2vh;
    box-shadow: -50vmin 0 6.749191030108923vmin currentColor;
}
.background span:nth-child(4) {
    color: #fe4848;
    top: 15%;
    left: 18%;
    animation-duration: 9s;
    animation-delay: -8s;
    transform-origin: 0vw -3vh;
    box-shadow: 50vmin 0 6.3668543170976415vmin currentColor;
}
.background span:nth-child(5) {
    color: #fe4848;
    top: 23%;
    left: 43%;
    animation-duration: 11s;
    animation-delay: -3s;
    transform-origin: -7vw -4vh;
    box-shadow: 50vmin 0 6.57899205654732vmin currentColor;
}
.background span:nth-child(6) {
    color: #73fe58;
    top: 95%;
    left: 44%;
    animation-duration: 8s;
    animation-delay: -7s;
    transform-origin: 22vw -20vh;
    box-shadow: -50vmin 0 6.6177656253228845vmin currentColor;
}
.background span:nth-child(7) {
    color: #73fe58;
    top: 34%;
    left: 78%;
    animation-duration: 13s;
    animation-delay: -2s;
    transform-origin: -6vw -18vh;
    box-shadow: 50vmin 0 7.193819535817123vmin currentColor;
}
.background span:nth-child(8) {
    color: #58a0e4;
    top: 22%;
    left: 70%;
    animation-duration: 10s;
    animation-delay: -2s;
    transform-origin: 8vw -7vh;
    box-shadow: 50vmin 0 6.682689258407874vmin currentColor;
}
.background span:nth-child(9) {
    color: #58a0e4;
    top: 94%;
    left: 22%;
    animation-duration: 10s;
    animation-delay: -1s;
    transform-origin: 14vw 18vh;
    box-shadow: 50vmin 0 6.547734896590407vmin currentColor;
}
.background span:nth-child(10) {
    color: #58a0e4;
    top: 45%;
    left: 53%;
    animation-duration: 9s;
    animation-delay: -10s;
    transform-origin: 8vw 23vh;
    box-shadow: -50vmin 0 7.044916106585316vmin currentColor;
}
.background span:nth-child(11) {
    color: #58a0e4;
    top: 22%;
    left: 45%;
    animation-duration: 9s;
    animation-delay: -4s;
    transform-origin: -21vw 11vh;
    box-shadow: -50vmin 0 6.463033744739294vmin currentColor;
}
.background span:nth-child(12) {
    color: #fe4848;
    top: 32%;
    left: 44%;
    animation-duration: 11s;
    animation-delay: -7s;
    transform-origin: 15vw 12vh;
    box-shadow: 50vmin 0 6.324399042161717vmin currentColor;
}
.background span:nth-child(13) {
    color: #58a0e4;
    top: 9%;
    left: 66%;
    animation-duration: 11s;
    animation-delay: -9s;
    transform-origin: 12vw -11vh;
    box-shadow: -50vmin 0 6.3068940595869405vmin currentColor;
}
.background span:nth-child(14) {
    color: #58a0e4;
    top: 14%;
    left: 23%;
    animation-duration: 11s;
    animation-delay: -2s;
    transform-origin: -5vw 0vh;
    box-shadow: 50vmin 0 7.073105220858455vmin currentColor;
}
.background span:nth-child(15) {
    color: #fe4848;
    top: 52%;
    left: 72%;
    animation-duration: 13s;
    animation-delay: -1s;
    transform-origin: 13vw 8vh;
    box-shadow: -50vmin 0 6.974786238179724vmin currentColor;
}
.background span:nth-child(16) {
    color: #58a0e4;
    top: 63%;
    left: 81%;
    animation-duration: 13s;
    animation-delay: -3s;
    transform-origin: 12vw -19vh;
    box-shadow: -50vmin 0 6.874619273089218vmin currentColor;
}
.background span:nth-child(17) {
    color: #fe4848;
    top: 34%;
    left: 37%;
    animation-duration: 11s;
    animation-delay: -2s;
    transform-origin: -16vw -23vh;
    box-shadow: 50vmin 0 6.953320690021746vmin currentColor;
}
.background span:nth-child(18) {
    color: #fe4848;
    top: 62%;
    left: 15%;
    animation-duration: 12s;
    animation-delay: -9s;
    transform-origin: 18vw -2vh;
    box-shadow: -50vmin 0 6.905343298473728vmin currentColor;
}
.background span:nth-child(19) {
    color: #fe4848;
    top: 7%;
    left: 96%;
    animation-duration: 12s;
    animation-delay: -8s;
    transform-origin: -19vw -19vh;
    box-shadow: 50vmin 0 6.371503009513672vmin currentColor;
}
.background span:nth-child(20) {
    color: #73fe58;
    top: 63%;
    left: 43%;
    animation-duration: 12s;
    animation-delay: -6s;
    transform-origin: -4vw -1vh;
    box-shadow: 50vmin 0 6.31124235630859vmin currentColor;
}
.background span:nth-child(21) {
    color: #fe4848;
    top: 16%;
    left: 83%;
    animation-duration: 12s;
    animation-delay: -10s;
    transform-origin: -24vw 1vh;
    box-shadow: 50vmin 0 7.034455216217594vmin currentColor;
}
.background span:nth-child(22) {
    color: #58a0e4;
    top: 8%;
    left: 56%;
    animation-duration: 10s;
    animation-delay: -5s;
    transform-origin: -9vw -3vh;
    box-shadow: 50vmin 0 6.611116455250253vmin currentColor;
}
.background span:nth-child(23) {
    color: #58a0e4;
    top: 29%;
    left: 98%;
    animation-duration: 15s;
    animation-delay: -5s;
    transform-origin: 1vw 5vh;
    box-shadow: -50vmin 0 6.9668519112123795vmin currentColor;
}
.background span:nth-child(24) {
    color: #73fe58;
    top: 15%;
    left: 28%;
    animation-duration: 10s;
    animation-delay: -7s;
    transform-origin: -19vw -6vh;
    box-shadow: 50vmin 0 7.123524500335768vmin currentColor;
}
.background span:nth-child(25) {
    color: #fe4848;
    top: 51%;
    left: 32%;
    animation-duration: 10s;
    animation-delay: -10s;
    transform-origin: -12vw -22vh;
    box-shadow: 50vmin 0 6.666266960072859vmin currentColor;
}

</style>
