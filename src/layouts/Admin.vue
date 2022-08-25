<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64">
      <div class="px-4 md:px-10 mx-auto w-full">
        <router-view />
        <footer-component />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
export default {
  name: "admin-layout",
  components: {
    Sidebar,
    FooterComponent,
  },
};
</script>
