<template>
  <div>
    <Leaderboard />

    <adsbygoogle :ad-slot="adslot" style="margin-bottom: 1em" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchInput from "@/components/SearchInput.vue";
import Leaderboard from "@/components/Leaderboard.vue";

export default Vue.extend({
  head() {
    return {
      title: "Home",
    };
  },
  computed: {
    adslot() {
      return process.env.ADSLOT_INDEX_BOTTOM
    }
  }
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
