<template>
  <section class="showcase">
    <div class="video-container">
      <video
        src="https://assets.mixkit.co/videos/preview/mixkit-hand-of-a-person-in-the-dark-through-colored-lights-3916-large.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div class="content">
      <h1>Coming Soon</h1>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=block');

:root {
  --primary-color: #3a4052;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  
font-family: 'Alex Brush', cursive;
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.showcase {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--primary-color);
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  position: absolute;
}

.content {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
