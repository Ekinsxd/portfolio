<script setup lang="ts">
import { Ref, ref } from 'vue'
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

class Experience {
  constructor(
    public company: string,
    public position: string,
    public date: string,
    public location: string,
    public description: string,
    public image: string,
    public enable: boolean = false
  ) {}
}

const experiences: Ref<Experience[]> = ref([])
const modules = ref([Navigation])
const db = getFirestore()

async function getExperiences() {
  const querySnapshot = await query(collection(db, 'Experiences'), orderBy('order'))
  const data = await getDocs(querySnapshot)
  data.forEach((doc) => {
    experiences.value.push(
      new Experience(
        doc.id,
        doc.data().title,
        doc.data().date,
        doc.data().location,
        doc.data().description,
        doc.data().img
      )
    )
  })
}
getExperiences()
</script>

<template>
  <div class="experience">
    <h1>Experience</h1>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide class="experience" v-for="experience in experiences" :key="experience.company">
        <div class="HStack">
          <h2>{{ experience.company }} | {{ experience.position }}</h2>
          <div class="VStack left">
            <h4>{{ experience.date }}</h4>
            <h4>{{ experience.location }}</h4>
          </div>
        </div>
        <img :src="experience.image" alt="Company Logo" height="100" />

        <p>{{ experience.description }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.VStack {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.left {
  align-items: flex-end;
}

.HStack {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 100%;
}

.experience {
  height: 90vh;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: top;
}
.experience-container {
  width: 100%;
}

.experience-card {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
}

.experience-card:last-child {
  border-bottom: none;
}

@media (min-width: 1024px) {
  .experience {
    display: flex;
    flex-direction: column;
    align-items: left;
    align-self: center;
    justify-content: center;
  }
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;
}
</style>
