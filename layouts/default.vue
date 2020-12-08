<template>
  <div>
    <Navbar />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="mt-10 pt-10">
        <SearchInput />
      </div>
      <div class="flex flex-wrap relative">
        <transition name="fade">
          <Nuxt class="w-full" />
        </transition>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
  head() {
    return {
      bodyAttrs: {
        class: [
          ...["h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto"],
          "antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100",
        ],
      },
    };
  },
});
</script>

<style lang="postcss">
.dark-mode {
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span,
  svg {
    color: lightgray;
  }
}

.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
