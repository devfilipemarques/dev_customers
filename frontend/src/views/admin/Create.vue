<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full-70 mb-12 px-4">
      <CreateUser />
    </div>
  </div>
</template>
<script>
import CreateUser from "@/components/User/CreateUser.vue";

export default {
  name: 'dev_settings',
  components: {
    CreateUser,
  },
};
</script>
