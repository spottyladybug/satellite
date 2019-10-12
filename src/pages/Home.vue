<template>
    <div id="home" @mousemove="followMouse">
        <div class="circle">
            <div v-if="isVisible" class="triangle" :style="{ top: top, left: left}"></div>
        </div>
        <div class="container">
            <div class="title">
                <h1 class="header">Твоя домашняя страница</h1>
                <strong class="subtitle">Расслабься и получай удовольствие</strong>
            </div>
        </div>            
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                isVisible: true,
                top: '400px',
                left: '200px',
            }
        },
        methods: {
            followMouse(event){
                this.top = event.clientY + 180 + 'px'; // -180px is top of circle
                this.left = event.clientX - window.innerWidth*0.8 + 300 + 'px'; // 80% is left and 300px is half width of circle 
            }
        }
    };
</script>
<style>
div#home{
    width: 100%;
    height: 100%;
}
#home .container {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 0 30px;
}
#home .title {
    margin: 150px 0 240px;
}
#home h1.header {
    margin: 0 0 .25em;
    padding: 0;
    font-family: "PT Serif script=cyrillic rev=1";
    font-size: 92px;
    font-style: normal;
    font-weight: 700;
    line-height: 0.994484;
}
#home strong.subtitle {
    font-family: "PT Serif script=cyrillic rev=1";
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.03891;
}
#home .circle {
    cursor: none;
    position: absolute;
    margin-left: -300px;
    z-index: -1;
    top: -180px;
    width: 600px;
    height: 600px;
    overflow: hidden;
    background: #0d3d3f;
    border-radius: 100%;
    left: 80%;
    overflow: hidden;
}
#home .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent transparent #eac263;
    border-style: solid;
    border-width: 0 90px 150px;
    transform: translate(-50%,-50%) rotate(-20deg);
}
</style>