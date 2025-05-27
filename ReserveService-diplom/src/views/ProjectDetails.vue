<template>
  <div class="project-details__intro">
    <div class="project-details__intro-content"></div>
  </div>
  <div class="project-details center">
    <div v-if="projectInfo" class="project-details__content">
      <h2 class="project-details__heading">{{ projectInfo.heading }}</h2>
      <div class="project-details__text-box">
        <p class="project-details__text">{{ projectInfo.firstparagraph }}</p>
        <p class="project-details__text">{{ projectInfo.secondparagraph }}</p>
      </div>
      <Slider :slider-pictures="projectInfo.sliderPictures" />
    </div>
    <div v-else>
      <p>Проект не найден.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Slider from '../components/Slider.vue';

export default {
  name: 'ProjectDetails',
  components: {
    Slider,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getProjectById']),
    projectInfo() {
      return this.getProjectById(this.id);
    },
  },
};
</script>



