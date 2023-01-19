
<template>
    <ul class="background">
        <img src="@/assets/image/logo.png" style="width: 100%; height: 100%;" />
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>
<style scoped>
@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #116ec0;
    overflow: hidden;
}

.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 9s linear infinite;
}




.background li:nth-child(0) {
    left: 60%;
    width: 122px;
    height: 122px;
    bottom: -122px;
    animation-delay: 1s;
}

.background li:nth-child(1) {
    left: 71%;
    width: 193px;
    height: 193px;
    bottom: -193px;
    animation-delay: 2s;
}

.background li:nth-child(2) {
    left: 79%;
    width: 131px;
    height: 131px;
    bottom: -131px;
    animation-delay: 2s;
}

.background li:nth-child(3) {
    left: 9%;
    width: 166px;
    height: 166px;
    bottom: -166px;
    animation-delay: 6s;
}

.background li:nth-child(4) {
    left: 37%;
    width: 162px;
    height: 162px;
    bottom: -162px;
    animation-delay: 4s;
}

.background li:nth-child(5) {
    left: 20%;
    width: 170px;
    height: 170px;
    bottom: -170px;
    animation-delay: 20s;
}

.background li:nth-child(6) {
    left: 55%;
    width: 129px;
    height: 129px;
    bottom: -129px;
    animation-delay: 27s;
}

.background li:nth-child(7) {
    left: 22%;
    width: 104px;
    height: 104px;
    bottom: -104px;
    animation-delay: 8s;
}

.background li:nth-child(8) {
    left: 22%;
    width: 101px;
    height: 101px;
    bottom: -101px;
    animation-delay: 10s;
}

.background li:nth-child(9) {
    left: 74%;
    width: 190px;
    height: 190px;
    bottom: -190px;
    animation-delay: 18s;
}
</style>
