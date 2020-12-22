<template>
  <!--wrap-->
  <div class="mb-5">
    <!--card-->
    <div class="overflow-hidden rounded-lg shadow-lg flex flex-col">
      <div
        class="rounded-t-lg bg-blue-500 text-white text-center text-xl font-bold py-2"
      >
        <font-awesome-icon icon="chart-bar" style="font-size: 15px" />
        Stats
      </div>

      <div
        class="px-6 py-4 border-solid border-r-4 border-b-4 border-l-4 border-blue-500"
      >
        <div class="font-bold text-lg">{{ player.name }}</div>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Rank: {{ player.rank }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          MMR: {{ player.mmr }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Peak MMR: {{ player.peak_mmr }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Win Rate: {{ player.win_rate }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          W-L (Last 10): {{ player.wl_last10 }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Gain/Loss (Last 10): {{ player.gl_last10 }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Events Played: {{ player.events_played }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Largest Gain: {{ player.largest_gain }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Largest Loss: {{ player.largest_loss }}
        </p>
        <p class="text-gray-700 text-xs dark:text-gray-400">
          Current: {{ getCurrent.name }}
        </p>
        <p
          v-if="getCurrent.division != 'Grandmaster'"
          class="text-gray-700 text-xs dark:text-gray-400"
        >
          Next:
          {{ getNext.name }} ({{ getNext.diff }})
        </p>

        <div class="mt-5">
          <div class="font-bold text-lg">Strikes Info</div>

          <div v-if="player.strikes_data && player.strikes_data.strikes > 0">
            <p class="text-gray-700 text-xs dark:text-gray-400">
              {{ player.strikes_data.strikes }}/3 strikes
            </p>
            <p class="text-gray-700 text-xs dark:text-gray-400">
              {{ player.strikes_data.muted }}/3 muted
            </p>

            <div class="font-bold text-base mt-2">- Dates</div>

            <div v-for="(date, i) in player.strikes_data.dates" :key="i">
              <p v-if="date" class="text-gray-700 text-xs dark:text-gray-400">
                Strike {{ (i += 1) }}: expires on
                {{ $dayjs(date).add(30, "day").format("YYYY/MM/DD Z") }}
              </p>
            </div>
          </div>

          <div v-else>
            <p class="text-gray-700 text-xs dark:text-gray-400">No Strikes</p>
          </div>
        </div>

        <div class="mt-5">
          <img
            :src="`/${getCurrent.name.toLowerCase()}.png`"
            width="128px"
            height="128px"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    player: {
      required: true,
      type: Object,
    },
  },
  computed: {
    getCurrent: function () {
      const mmr = this.player.mmr;
      if (this.between(mmr, 0, 1999)) {
        return { name: "Iron", range: "0-1999" };
      } else if (this.between(mmr, 2000, 3499)) {
        return { name: "Bronze", range: "2000-3499" };
      } else if (this.between(mmr, 3500, 4999)) {
        return { name: "Silver", range: "3500-4999" };
      } else if (this.between(mmr, 5000, 6499)) {
        return { name: "Gold", range: "5000-6499" };
      } else if (this.between(mmr, 6500, 7999)) {
        return { name: "Platinum", range: "6500-7999" };
      } else if (this.between(mmr, 8000, 9499)) {
        return { name: "Sapphire", range: "8000-9499" };
      } else if (this.between(mmr, 9500, 10999)) {
        return { name: "Diamond", range: "9500-10999" };
      } else if (this.between(mmr, 11000, 12499)) {
        return { name: "Master", range: "11000-12499" };
      } else if (mmr >= 12500) {
        return { name: "Grandmaster", range: "12500+" };
      }
    },
    getNext: function () {
      const mmr = this.player.mmr;
      const current = this.getCurrent;
      if (current.name == "Iron") {
        return { name: "Bronze", start: 2000, diff: 2000 - mmr };
      } else if (current.name == "Bronze") {
        return { name: "Silver", start: 3500, diff: 3500 - mmr };
      } else if (current.name == "Silver") {
        return { name: "Gold", start: 5000, diff: 5000 - mmr };
      } else if (current.name == "Gold") {
        return { name: "Platinum", start: 6500, diff: 6500 - mmr };
      } else if (current.name == "Platinum") {
        return { name: "Sapphire", start: 8000, diff: 8000 - mmr };
      } else if (current.name == "Sapphire") {
        return { name: "Diamond", start: 9500, diff: 9500 - mmr };
      } else if (current.name == "Diamond") {
        return { name: "Master", start: 11000, diff: 11000 - mmr };
      } else if (current.name == "Master") {
        return { name: "Grandmaster", start: 12500, diff: 12500 - mmr };
      } else {
        return { name: "", start: 0, diff: 0 };
      }
    },
  },
  methods: {
    between(x, min, max) {
      return x >= min && x <= max;
    },
  },
};
</script>