<script setup>
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div :class="addClass">
    <div class="st">

      <div class="st-top">
        <div class="st-bound st-bound-full"></div>
        <p><span class="st-drop st-stranger-s">W</span><span class="st-stranger-t">e</span><span class="st-stranger-r">b</span><span class="st-stranger-a">C</span><span class="st-stranger-n">r</span><span class="st-stranger-g">e</span><span class="st-stranger-e">w</span>
        </p>
        <div class="st-bound st-bound-mini st-bound-left"></div>
        <div class="st-bound st-bound-mini st-bound-right"></div>
      </div>

      <div class="st-bottom">
        <p><span class="st-things-t">S</span><span class="st-things-h">u</span><span class="st-things-i">r</span><span class="st-things-n">v</span><span class="st-things-g">e</span><span class="st-things-s">y</span></p>
      </div>

    </div>
</div>
</template>

<style>
.st {
  width: 625px;
  height: 190px;
  margin: 1rem auto auto 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 6.5rem;
  font-family: 'ITC Benguiat W01';
  /* font-family: 'Young Serif'; */
  font-weight: 800;
  color: #1c0502;
  text-shadow: -0.05rem -0.05rem 1px #ed2b12,
    0.05rem -0.05rem 1px #ed2b12,
    -0.05rem 0.05rem 1px #ed2b12,
    0.05rem 0.05rem 1px #ed2b12,
    0 0 15px #630100,
    0 0 20px #450100;
  letter-spacing: -2px;
}

.st p {
  display: inline-block;
  margin: 0;
}

.st-bound {
  box-shadow: -0.05rem -0.05rem 2px #ed2b12,
    0.05rem -0.05rem 2px #ed2b12,
    -0.05rem 0.05rem 2px #ed2b12,
    0.05rem 0.05rem 2px #ed2b12;
  height: 5px;
}

.st-bound-full {
  width: 100%;
  margin: auto;
  margin-bottom: -1.2rem;
  max-width: 612px;
  margin-left: 5px;
  background-color: #1c0502;
}

.st-bound-mini {
  margin-top: 0.5rem;
}

.st-bound-left {
  float: left;
  width: 99px;
  position: relative;
  left: 5px;
}

.st-bound-right {
  float: right;
  width: 103px;
  left: 0.3rem;
  position: relative;
}

.st-bottom {
  clear: both;
  top: -5.75rem;
  position: relative;
  left: .6rem;
  letter-spacing: 2px;
}

.st-drop {
  line-height: 0;
  position: relative;
  top: 1.55rem;
}

.st-stranger-s {
  font-size: 10.5rem;
  letter-spacing: -8px;
}

.st-stranger-t {
  letter-spacing: 0;
}

.st-stranger-n {
  letter-spacing: -5px;
}

.st-stranger-g {
  letter-spacing: 0;
}

.st-stranger-r-2 {
  font-size: 10.5rem;
  right: 0.2rem;
}

.st-things-t {
  font-size: 104%;
  letter-spacing: 2px;
}

.st-things-n {
  letter-spacing: -5px;
}

.st-things-g {
  letter-spacing: -3px;
}

</style>

