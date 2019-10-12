<template>
    <div id="home">
        <div class="circle" @mousemove="followMouse">
            <div v-if="isVisible" class="triangle" :style="{ top: top, left: left}"></div>
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
                console.log(event)
                console.log(window)
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
.circle {
    cursor: none;
    position: absolute;
    margin-left: -300px;
    z-index: 1;
    top: -180px;
    width: 600px;
    height: 600px;
    overflow: hidden;
    background: #0d3d3f;
    border-radius: 100%;
    left: 80%;
    overflow: hidden;
}
.triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent transparent #eac263;
    border-style: solid;
    border-width: 0 90px 150px;
    transform: translate(-50%,-50%) rotate(-20deg);
}
</style>