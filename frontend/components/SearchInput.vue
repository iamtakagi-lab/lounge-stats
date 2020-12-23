<template>
  <div class="w-full relative flex flex-col justify-between">
    <div
      class="w-full relative"
      @keydown.down="increment"
      @keydown.up="decrement"
      @keydown.enter="go"
    >
      <label for="search" class="sr-only">Search</label>
      <div class="relative inline-flex w-full">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <IconSearch class="h-5 w-5 text-gray-500" />
        </div>
        <input
          id="search"
          ref="search"
          v-model="q"
          class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 rounded-full border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
          placeholder="Search Stats"
          type="search"
          autocomplete="off"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </div>
    <ul
      v-show="focus && (searching || results.length)"
      class="z-10 absolute w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden"
      :class="{ 'rounded-t-none': focus && results.length }"
      style="margin-top: 37px"
    >
      <li v-if="searching && !results.length" class="px-4 py-2">
        Searching...
      </li>
      <li
        v-for="(player, index) of results"
        :key="player.name"
        @mouseenter="focusIndex = index"
        @mousedown="go"
      >
        <NuxtLink
          :to="{
            name: 'players-name',
            params: { name: player.name ? player.name : '' },
          }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150"
          :class="{
            'text-green-500 bg-gray-200 dark:bg-gray-800': focusIndex === index,
          }"
          @click="focus = false"
        >
          {{ player.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["players"])
  },
  data() {
    return {
      q: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: []
    };
  },
  mounted() {
    window.addEventListener("keyup", this.keyup);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyup);
  },
  watch: {
    async q (q) {
      this.focusIndex = -1
      if (!q) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = this.players.filter(v => v.name.toUpperCase().includes(q.toUpperCase())).slice(0, 20)
      this.searching = false
    }
  },
  methods: {
    onFocus() {
      this.focus = true;
      this.$emit("focus", true);
    },
    onBlur() {
      this.focus = false;
      this.$emit("focus", false);
    },
    keyup(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    increment() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++;
      }
    },
    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--;
      }
    },
    go() {
      if (!this.results.length) {
        return
      }
      if (this.q) {
        const player = this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex]
        const path = `/players/${player.name ? player.name : ''}`
        this.$router.push(path);

        this.$refs.search.blur();
        this.q = '';
      }
    },
  },
};
</script>