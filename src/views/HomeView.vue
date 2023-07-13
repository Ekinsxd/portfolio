<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>Ethan Tran</h1>
    <h2>Grand Rapids, MI 49316 | (616) 448-8053 | Tran.Ethann@gmail.com</h2>
    <p>
      As a recent graduate and first-generation Vietnamese-American, I had the privilege of
      attending Grand Valley State University and exploring a diverse range of career paths. Despite
      initially exploring fields such as medicine, engineering, and mathematics, I ultimately found
      my passion in computer science. I am excited to announce that I will be joining Walmart as a
      software engineer in August 2023. I am looking forward to contributing to Walmart's innovative
      and impactful work in the technology sector.
    </p>

    <div class="contact">
      <h1>Contact Me!</h1>
      <div class="social-holder">
        <a href="http://linkedin.com/in/tran-ethann/"
          ><img src="@/assets/linkedin.svg" width="50"
        /></a>
        <a href="https://github.com/Ekinsxd/"><img src="@/assets/github.svg" width="50" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  background-color: var(--foreground);
  border-radius: 25%;
  margin: 0.25rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

.social-holder {
  align-self: center;
}
</style>
