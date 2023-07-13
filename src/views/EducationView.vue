<script setup lang="ts">
import { Ref, ref } from 'vue'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const db = getFirestore()

class Education {
  constructor(public courseNum: string, public courseName: string, public link: string) {}
}

const education: Ref<Education[]> = ref([])
async function getEducation() {
  const querySnapshot = await getDocs(collection(db, 'Education'))
  querySnapshot.forEach((doc) => {
    education.value.push(new Education(doc.id, doc.data().name, doc.data().link))
  })
}
getEducation()
</script>

<template>
  <div class="education">
    <div class="college">
      <h1>Education</h1>
      <div class="HStack">
        <h2>Grand Valley State University</h2>
        <h2>Aug 2018 - Apr 2023</h2>
      </div>
      <div class="HStack">
        <h3>Bachelor of Science</h3>
        <h3>GPA: 3.80</h3>
      </div>
      <h4>Major: Computer Science | Minor: Computer Engineering</h4>
    </div>

    <div class="VStack">
      <h1>Relevent Courses</h1>
      <div class="education-container">
        <div class="education-card" v-for="course in education" :key="course.courseNum">
          <h2>{{ course.courseNum }}</h2>
          <a :href="course.link">{{ course.courseName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.college {
  width: 100%;
}
.education {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.education-container {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  gap: 1rem;
}

.HStack {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.VStack {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 1024px) {
  .education-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    gap: 1rem;
  }
  .education {
    justify-content: space-around;
  }
}
</style>
