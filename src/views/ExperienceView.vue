<script setup lang="ts">
import { Ref, ref } from 'vue'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const db = getFirestore()

class Experience {
  constructor(
    public company: string,
    public position: string,
    public date: string,
    public location: string,
    public description: string,
    public image: string
  ) {}
}

const experiences: Ref<Experience[]> = ref([])
async function getExperiences() {
  const querySnapshot = await getDocs(collection(db, 'Experiences'))
  querySnapshot.forEach((doc) => {
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
    <div class="experience-container">
      <div class="experience-card" v-for="experience in experiences" :key="experience.company">
        <h2>{{ experience.company }}</h2>
        <h3>{{ experience.position }}</h3>
        <img :src="experience.image" alt="Company Logo" />
        <h4>{{ experience.date }}</h4>
        <h4>{{ experience.location }}</h4>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .experience {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
}

.experience {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
