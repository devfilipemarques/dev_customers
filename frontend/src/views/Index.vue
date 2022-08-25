<template>
  <div>
    <section class="mt-30 md:mt-30 pb-10 relative">
      <div class="justify-center text-center flex flex-wrap mt-24">
        <div class="w-full md:w-6/12 px-12 md:px-4">
          <center class="space"><img
                      alt="..."
                      :src="logo"
                    /></center>
        </div>
      </div>
    </section>
    <section class="block relative z-1">
      <div class="container mx-auto">
        <div class="justify-center flex flex-wrap">
          <login-component/>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>


<script>
// IMPORTS IMAGES
import logo from "@/assets/img/logo.png";

// IMPORTS COMPONENT
import LoginComponent from "@/components/Auth-Server/Login.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

// EXPORT
export default {
  name: "dev_index",
  data() {
    return {
      logo,
    };
  },
  components: {
      LoginComponent,
      FooterComponent
    },
};
</script>
