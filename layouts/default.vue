<template>
  <div>

    <Navbar />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="mt-10 pt-10">
      <button class="mb-5 w-full bg-white hover:bg-gray-100 font-semibold py-2 px-4 border text-gray-600 dark:text-gray-400 border-gray-400 rounded shadow dark:border-gray-800 bg-white dark:bg-gray-900"
      @click="openUrl('https://discord.com/oauth2/authorize?client_id=743532508343304242&permissions=8192&scope=bot')">
        Stats Bot
      </button>
      <button class="mb-5 w-full bg-white hover:bg-gray-100 font-semibold py-2 px-4 border text-gray-600 dark:text-gray-400 border-gray-400 rounded shadow dark:border-gray-800 bg-white dark:bg-gray-900"
        @click="openUrl('https://vikemk.github.io/Lounge-MMR-Calculator/')">
        MMR Calculator
      </button>
      </div>
      <div>
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
  methods: {
    openUrl(url) {
       window.open(url, '_blank')
    }
  },
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

<style lang="postcss" >
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
