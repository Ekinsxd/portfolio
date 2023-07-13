<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ExperienceView from './views/ExperienceView.vue'
import EducationView from './views/EducationView.vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
    HomeView,
    ProjectsView,
    ExperienceView,
    EducationView
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<template>
  <header>
    <img alt="Headshot" class="picture" src="@/assets/picture.png" width="150" height="150" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <!-- <RouterLink to="/contact">Contact Me</RouterLink> -->
      </nav>
    </div>
  </header>

  <swiper
    :direction="'vertical'"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><HomeView /></swiper-slide>
    <swiper-slide><ExperienceView /></swiper-slide>
    <swiper-slide><EducationView /></swiper-slide>
    <swiper-slide><ProjectsView /></swiper-slide>
  </swiper>
  <!-- <ProjectsView /> -->
  <!-- <RouterView /> -->
</template>

<style scoped>
.picture {
  border-radius: 50%;
  display: block;
  margin-bottom: 1rem;
  border: 0.3rem solid var(--color-border);
  box-shadow: 0 0 0 1px var(--color-border);
  background-color: var(--color-background);
  transition: all 0.2s ease-in-out;
}

header {
  line-height: 1.5;
  /* max-height: 100vh; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav :first-of-type {
  border-left: none;
}

/* .swiper {
  width: 100%;
  height: 100%;
} */

.swiper-slide {
  height: auto;
}

.mySwiper {
  max-height: 100vh;
  max-width: 100%;
}

.wrapper {
  display: flex;
  align-self: top;
}

@media (min-width: 1024px) {
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .picture {
    margin-top: 5rem;
  }

  header .wrapper {
    display: flex;
    justify-content: top;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav a {
    border-left: 1px solid var(--color-border);
  }

  nav :first-of-type {
    border-left: 1px solid var(--color-border);
  }

  nav {
    width: 5%;
    align-self: center;
    align-items: center;
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
