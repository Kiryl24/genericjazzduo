<template>
  <div class="audio-player">
    <div class="audio-info">
      <h3>{{ title }}</h3>
    </div>
    <div class="audio-controls">
      <img v-if="!isPlaying" src="@/assets/playbutton.png" @click="playAudio" class="control-button" alt="Play" />
      <img v-if="isPlaying" src="@/assets/stopbutton.png" @click="pauseAudio" class="control-button" alt="Pause" />
      <input
          type="range"
          class="progress-slider"
          :min="0"
          :max="duration"
          :value="currentTime"
          @input="seekAudio($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    isActive: Boolean,
  },
  data() {
    return {
      audio: new Audio(this.src),
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1.0,
    };
  },
  mounted() {
    this.audio.volume = this.volume;
    this.audio.addEventListener('timeupdate', this.updateTime);
    this.audio.addEventListener('loadedmetadata', this.updateDuration);
    this.updateProgressGradient();

    if (this.isActive) {
      this.playAudio();
    }

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  methods: {
    playAudio() {
      this.$emit('play');
      if (!this.isPlaying) {
        this.audio.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
        this.isPlaying = true;
        this.$emit('play', this);
      }
    },
    pauseAudio() {
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
        this.$emit('pause', this);
      }
    },
    seekAudio(event) {
      this.audio.currentTime = event.target.value;
      this.currentTime = this.audio.currentTime;
      this.updateProgressGradient();
    },
    updateTime() {
      this.currentTime = this.audio.currentTime;
      this.updateProgressGradient();
    },
    updateDuration() {
      this.duration = this.audio.duration;
    },
    updateProgressGradient() {
      const progressSlider = this.$el.querySelector('.progress-slider');
      const value = (this.currentTime / this.duration) * 100;
      progressSlider.style.background = `linear-gradient(to right, #eae1f24 ${value}%, #cdcdcd ${value}%, #cdcdcd 100%)`;
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.pauseAudio();
      }
    },
  },
  watch: {
    isActive(newVal) {
      if (newVal) {
        this.audio.play().then(() => {
          this.isPlaying = true;
        }).catch(error => {
          console.error("Audio playback failed:", error);
        });
      } else {
        this.audio.pause();
        this.isPlaying = false;
      }
    }
  },
  beforeUnmount() {
    this.audio.removeEventListener('timeupdate', this.updateTime);
    this.audio.removeEventListener('loadedmetadata', this.updateDuration);
    this.audio.pause();
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
};
</script>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;   padding: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.audio-info {
  flex: 1; }

.audio-controls {
  display: flex;
  flex-direction: row;
  align-items: center;   gap: 10px;   margin-left: 5px;   width: 70%;
}

.control-button {
  width: 40px;   height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease; }

.control-button:hover {
  transform: scale(1.2); }

.progress-slider {
  -webkit-appearance: none;
  background: linear-gradient(to right, #fcfadb 0%, #c5c5b8 100%);
  height: 8px;   border-radius: 5px;
  width: 100%;   max-width: 600px;   box-sizing: border-box;   cursor: pointer;
}

.progress-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #070707;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease; }

.progress-slider::-webkit-slider-thumb:hover {
  transform: scale(1.5); }

.progress-slider::-moz-range-thumb {
  background: #070707;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease; }

.progress-slider::-moz-range-thumb:hover {
  transform: scale(1.5); }

@media (max-width: 768px) {
  .control-button {
    width: 50px;     height: 50px;
  }

  .control-button:hover {
    transform: scale(1.3);   }

  .progress-slider {
    width: 90%;   }
}
</style>
