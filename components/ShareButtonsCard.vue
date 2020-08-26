<template>
    <div class="rounded-lg overflow-hidden shadow-lg mb-10 pb-10">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Share</div>
      
      <ShareButtons :name="name"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   props: {
      name: {
        required: true,
        type: String
      }
  },
})
</script>