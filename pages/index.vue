<template>
  <div>
    <Leaderboard/>

    <adsbygoogle ad-slot="5841114965" style="margin-bottom: 1em"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchInput from '@/components/SearchInput.vue'
import Leaderboard from '@/components/Leaderboard.vue'

export default Vue.extend({
  head() {
    return {
      title: "Home",
    };
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
