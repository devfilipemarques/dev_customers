<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full-70 mb-12 px-4">
      <list-table />
    </div>
  </div>
</template>
<script>
import ListTable from "@/components/Table/ListTable.vue";

export default {
  name: 'dev_tables',
  components: {
    ListTable,
  },
};
</script>
