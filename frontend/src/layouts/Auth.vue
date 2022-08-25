<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div class="flex content-center items-center justify-center h-full">
          <center><img alt="Logo" class="logo" :src="logo" /></center>
        </div>
        <div class="absolute top-0 w-full h-full bg-no-repeat bg-full"></div>
        <router-view />
      </section>
    </main>
  </div>
</template>
<script>
// IMPORTS IMAGES
import logo from "@/assets/img/logo.png";

// EXPORT
export default {
  name: "dev_auth",
  data() {
    return {
      logo,
    };
  },
};
</script>
