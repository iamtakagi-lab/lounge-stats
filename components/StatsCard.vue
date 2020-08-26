<template>
  <div class="rounded-lg overflow-hidden shadow-lg mb-5 flex">
    <div class="px-6 py-4">
      <div class="font-bold text-lg mb-2">{{player.name}}</div>
      <p class="text-gray-700 text-xs dark:text-gray-400">Rank: {{player.rank}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">MMR: {{player.mmr}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Peak MMR: {{player.peak_mmr}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Win Rate: {{player.win_rate}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">W-L (Last 10): {{player.wl_last10}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Gain/Loss (Last 10): {{player.gl_last10}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Events Played: {{player.events_played}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Largest Gain: {{player.largest_gain}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Largest Loss: {{player.largest_loss}}</p>
      <p class="text-gray-700 text-xs dark:text-gray-400">Division: {{getDivisionData(player.mmr).division}}</p>
      <p v-if="getDivisionData(player.mmr).division != 'Grandmaster'" class="text-gray-700 text-xs dark:text-gray-400">Next Division: {{getNextDivisionData(player.mmr).division}} ({{(getNextDivisionData(player.mmr).start - player.mmr)}})</p>
    </div>
     <div class="px-6 py-4 ml-10 pl-10 top-0 right-0 relative">
         <img :src="require(`@/assets/images/${getDivisionData(player.mmr).division.toLowerCase()}.png`)" width="128px" height="128px"/>
     </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    player: {
      required: true,
      type: Object,
    },
  },
  methods: {
    between(x, min, max) {
      return x >= min && x <= max;
    },
    getDivisionData(mmr: number): Object {
      if (this.between(mmr, 0, 1999)) {
        return {division: "Iron", range: "0-1999"};
      } else if (this.between(mmr, 2000, 3499)) {
        return {division: "Bronze", range: "2000-3499"};
      } else if (this.between(mmr, 3500, 4999)) {
        return {division: "Silver", range: "3500-4999"};
      } else if (this.between(mmr, 5000, 6499)) {
        return {division: "Gold", range: "5000-6499"};
      } else if (this.between(mmr, 6500, 7999)) {
         return {division: "Platinum", range: "6500-7999"};
      } else if (this.between(mmr, 8000, 9499)) {
      return {division: "Sapphire", range: "8000-9499"};
      } else if (this.between(mmr, 9500, 10999)) {
        return {division: "Diamond", range: "9500-10999"};
      } else if (this.between(mmr, 11000, 12499)) {
         return {division: "Master", range: "11000-12499"};
      } else if (12500 >= mmr) {
        return {division: "GrandMaster", range: "12500+"};
      }
    },
    getNextDivisionData(mmr: number): Object {
      if (this.getDivisionData(mmr).division == "Iron") {
        return {division: "Bronze", start: 2000};
      } else if (this.getDivisionData(mmr).division == "Bronze") {
        return {division: "Silver", start: 3500};
      } else if (this.getDivisionData(mmr).division == "Silver") {
        return {division: "Gold", start: 5000};
      } else if (this.getDivisionData(mmr).division == "Gold") {
        return {division: "Platinum", start: 6500};
      } else if (this.getDivisionData(mmr).division == "Platinum") {
        return {division: "Sapphire", start: 8000};
      } else if (this.getDivisionData(mmr).division == "Sapphire") {
        return {division: "Diamond", start: 9500};
      } else if (this.getDivisionData(mmr).division == "Diamond") {
        return {division: "Master", start: 11000};
      } else if (this.getDivisionData(mmr).division == "Master") {
        return {division: "Grandmaster", start: 12500};
      }
    },
  },
});
</script>