<template>
  <div id="home" @mousemove="followMouse">
    <div class="figures-circle">
      <div class="circle">
          <div class="circle">
            <div class="small-triangle" :style="{ top: top + 'px', left: left - 450 + 'px'}"></div>
          </div>
      </div>
    </div>
    <div class="figures-square" @mousemove="followMouse">
      <div class="square">
        <div class="square">
          <div class="small-circle" :style="{ top: top - 320 + 'px', left: left + 'px'}"></div>
        </div>
      </div>
    </div>
    <div class="figures-triangle" @mousemove="followMouse">
      <div class="triangle">
        <div class="small-square" :style="{ top: top + 'px', left: left + 'px'}"></div>
      </div>
    </div>
    <div class="container">
      <div class="title">
        <h1 class="header">Твоя домашняя страница</h1>
        <strong class="subtitle">Расслабься и получай удовольствие</strong>
      </div>
            <div class="title">
        <h1 class="header">Твоя домашняя страница</h1>
        <strong class="subtitle">Расслабься и получай удовольствие</strong>
      </div>
            <div class="title">
        <h1 class="header">Твоя домашняя страница</h1>
        <strong class="subtitle">Расслабься и получай удовольствие</strong>
      </div>
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
      top: 400,
      left: 200,
    };
  },
  methods: {
    followMouse(event) {
      this.top = event.clientY + document.documentElement.scrollTop;
      this.left = event.clientX + document.documentElement.scrollLeft;
    }
  },
};
</script>
<style scoped>
div#home {
  width: 100%;
  height: 100%;
}
.figures-circle .figures-triangle, .figures-square {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
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
  margin: 0 0 0.25em;
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
.figures-circle .circle, .figures-square .square {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
}
.figures-circle .circle .circle {
  margin-left: -300px;
  top: -180px;
  width: 600px;
  height: 600px;
  overflow: hidden;
  background: #0d3d3f;
  border-radius: 100%;
  left: 80%;
  overflow: hidden;
}
.figures-square .square .square {
  top: 320px;
  right: 50%;
  left: auto;
  width: 600px;
  height: 600px;
  margin-right: 320px;
  overflow: hidden;
  background: #e79367;
  margin-right: 120px;
  transform: rotate(45deg) scale(0.7);
}
.triangle {
  position: absolute;
  top: 480px;
  left: 40%;
  width: 1000px;
  height: 740px;
  overflow: hidden;
  margin-left: 60px;
  border-color: transparent transparent #eac263;
  border-style: solid;
  border-width: 0 501px 740px;
  transform: rotate(15deg) scale(0.8);
}
.circle .small-triangle {
  position: absolute;
  border-color: transparent transparent #eac263;
  border-style: solid;
  border-width: 0 90px 150px;
  transform: translate(-50%, -50%) rotate(-20deg);
}
.figures-circle .small-triangle {
  position: absolute;
  border-color: transparent transparent #eac263;
  border-style: solid;
  border-width: 0 90px 150px;
  transform: translate(-50%, -50%) rotate(-20deg);
}
.triangle .small-square {
  position: absolute;
  width: 150px;
  height: 150px;
  background: #849d64;
  transform: translate(-50%, -50%) rotate(15deg);
}
.square .small-circle {
  position: absolute;
  width: 220px;
  height: 220px;
  background: #221831;
  border-radius: 100%;
  transform: translate(-50%, -50%);
}
</style>