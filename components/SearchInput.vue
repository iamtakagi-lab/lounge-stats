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
          class="mr-5 block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
          placeholder="Search Player's Stats"
          type="search"
          autocomplete="off"
          @focus="onFocus"
          @blur="onBlur"
        />
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 border dark:border-green-700 rounded"
          @click="go"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["players"]),
    ...mapGetters(["playerByName"]),
  },
  data() {
    return {
      q: "",
      focus: false,
    };
  },
  mounted() {
    window.addEventListener("keyup", this.keyup);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyup);
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
      if (this.q) {
        const path = `/players/${this.q}`;
        this.$router.push(path);

        this.$refs.search.blur();
        this.q = "";
      }
    },
  },
};
</script>