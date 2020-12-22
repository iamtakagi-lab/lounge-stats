<template>
  <div>
    <div class="mt-5 mb-5">
      <Stats :player="player" />
    </div>

    <adsbygoogle ad-slot="3372710209" style="margin-bottom: 1em" />
  </div>
</template>

<script>
export default {
   async asyncData({ $axios, store, params, error }) {
    const player = await $axios.$get(`/players/${params.name}`)
    if (player === undefined)
      error({ statusCode: 404, message: "Player not found" });
    return {
      player
    };
  },
  head() {
    return {
      title: this.player.name + "'s Stats",
    };
  }
};
</script>