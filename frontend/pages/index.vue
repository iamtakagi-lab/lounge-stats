<template>
  <!--wrap-->
  <div>
    <!--card-->
    <div class="overflow-hidden rounded-lg shadow-lg flex flex-col">
      <div
        :class="`rounded-t-lg text-white bg-blue-500 text-white text-center text-xl font-bold py-2`"
      >
        <font-awesome-icon icon="chart-bar" style="font-size: 15px" />
        Leaderboard
      </div>

      <div
        class="overflow-x-auto sticky bg-white rounded-lg shadow overflow-y-auto w-full relative dark:border-gray-800 bg-white dark:bg-gray-900"
        style="height: 605px"
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
              >
                {{ heading }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="text-left"
              v-for="data in players.slice(getStart, getCurrent)"
              :key="data"
            >
              <td
                v-for="key in Object.keys(data)"
                :key="key"
                class="border-t bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 dark:text-gray-400 font-bold tracking-wider text-xs dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div v-if="key === 'strikes_data'"></div>
                <div v-else-if="key === 'name'">
                  <nuxt-link :to="`/players/${data[key]}`">{{
                    data[key]
                  }}</nuxt-link>
                </div>
                <div v-else>{{ data[key] }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-5 mb-5">
      <button
        class="transition duration-300 shadow-md hover:shadow-none text-blue-100 bg-blue-500 text-black font-bold py-1 px-2 rounded-md"
        v-show="hasPrev"
        :to="`/leaderboard?page=${getPrev}`"
        @click="clickCallback(getPrev)"
      >
        Prev
      </button>

      <button
        class="bg-gray-500 text-white rounded-md shadow-md font-bold py-1 px-2 rounded opacity-50 cursor-not-allowed"
        v-show="!hasPrev"
      >
        Prev
      </button>

      <p style="display: inline-flex; margin-left: 5px; margin-right: 5px">
        {{ currentPage }} /
        {{ Math.ceil($store.state.players.length / this.perPage) }}
      </p>

      <button
        class="mr-5 transition duration-300 shadow-md hover:shadow-none text-blue-100 bg-blue-500 text-black font-bold py-1 px-2 rounded-md"
        v-show="
          this.currentPage <
          Math.ceil($store.state.players.length / this.perPage)
        "
        :to="`/leaderboard?page=${getNext}`"
        @click="clickCallback(getNext)"
      >
        Next
      </button>

      <button
        class="bg-gray-500 text-white rounded-md shadow-md font-bold py-1 px-2 rounded opacity-50 cursor-not-allowed"
        v-show="
          !(
            this.currentPage <
            Math.ceil($store.state.players.length / this.perPage)
          )
        "
        disabled
      >
        Next
      </button>
    </div>

    <adsbygoogle ad-slot="5841114965" style="margin-bottom: 1em" />
  </div>

</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import { mapState } from "vuex";

export default {
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
        "Largest Loss",
      ],
      perPage: 50,
    };
  },
  head() {
    return {
      title: "Home",
    };
  },
  computed: {
    ...mapState(["players"]),

    getCurrent: function () {
      return this.currentPage * this.perPage;
    },

    getStart: function () {
      let current = this.currentPage * this.perPage;
      return current - this.perPage;
    },

    getPrev: function () {
      return this.currentPage - 1;
    },

    getNext: function () {
      return this.currentPage + 1;
    },

    hasPrev: function () {
      return this.currentPage > 1;
    },
  },
  methods: {
    clickCallback(page) {
      this.currentPage = Number(page);
      this.$router.push(`/leaderboard?page=${page}`);
    },
  },
  async asyncData({ params, query, error }) {
    return {
      currentPage: query["page"] === undefined ? 1 : Number(query["page"]),
    };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
