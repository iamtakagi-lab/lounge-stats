<template>
   <div class="mt-5">
     <StatsCard :player="player"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ store, params, error }) {
    const player = store.getters.playerByName(params.name)
    if(player === undefined) error({ statusCode: 404, message: 'Player not found' })
    return {
      player
    }
  },
});
</script>