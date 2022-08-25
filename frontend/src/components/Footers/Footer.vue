<template>
  <footer class="relative pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm white font-semibold py-1">
            Copyright © {{ date }} Customer Crud in VueJS.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'dev_footer',
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
