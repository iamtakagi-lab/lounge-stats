<template>
  <div>
    <div class="text-xl mt-5 font-bold">Leaderboard</div>

    <div
      class="overflow-x-auto sticky bg-white rounded-lg shadow overflow-y-auto w-full relative mt-5 mb-5 dark:border-gray-800 bg-white dark:bg-gray-900"
      style="height: 605px;"
    >
      <table
        class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        <thead>
          <tr class="text-left">
            <th
              class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider text-xs dark:border-gray-800 bg-white dark:bg-gray-900"
              v-for="heading in headings"
              :key="heading"
            >{{heading}}</th>
          </tr>
        </thead>

        <tbody>
          <tr class="text-left" v-for="data in players.slice(0, 50)" :key="data">
            <td
              v-for="key in Object.keys(data)"
              :key="key"
              class="border-t bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 dark:text-gray-400 font-bold tracking-wider text-xs dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div v-if="key == 'name'">
                 <nuxt-link :to="`/players/${data[key]}`" @click="setName(data[key])">{{data[key]}}</nuxt-link>
              </div>
              <div v-else>{{data[key]}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button
      @click="$router.push('/leaderboard')"
      class="mb-5 w-full bg-white hover:bg-gray-100 font-semibold py-2 px-4 border text-gray-600 dark:text-gray-400 border-gray-400 rounded shadow dark:border-gray-800 bg-white dark:bg-gray-900"
    >View More</button>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["players"]),
  },
  data() {
    return {
      headings: [
        "Rank",
        "Player",
        "MMR",
        "Peak MMR",
        "Win Rate",
        "W - L",
        "Gain/Loss",
        "Events Played",
        "Largest Gain",
        "Largets Loss",
      ],
      modal: false,
      name: ''
    };
  },
  methods: {
    openModal(name) {
      this.name = name;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  },
});
</script>