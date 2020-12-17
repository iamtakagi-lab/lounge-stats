<template>
  <div>
    <div class="mt-5 mb-5">
      <Stats :player="player" />
    </div>

    <adsbygoogle :ad-slot="process.env.ADSLOT_PLAYER_BOTTOM" style="margin-bottom: 1em" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ store, params, error }) {
    const player = store.getters.playerByName(params.name);
    if (player === undefined)
      error({ statusCode: 404, message: "Player not found" });
    return {
      player,
    };
  },
  head() {
    return {
      title: this.player.name + "'s Stats",
    };
  },
});
</script>