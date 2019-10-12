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
                this.top = event.pageY + 220 + 'px';
                this.left = event.pageX - 800 + 'px';
            }
        }
    };
</script>
<style>
.circle {
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