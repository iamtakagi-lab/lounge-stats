<template>
  <div>
    <Navbar />

    <main class="container mx-auto px-4 lg:px-8 shadow-xl 
    antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100
    h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto">
      <div class="mt-10 pt-10">
        <div class="flex flex-wrap text-sm text-center">
          <span
            class="flex-auto mb-5 text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle mr-3 border border-gray-300 cursor-pointer">
             <font-awesome-icon icon="calendar" style="font-size: 15px" />
            Season: 3
          </span>
          <span
            class="flex-auto mb-5 text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle mr-3 border border-gray-300 cursor-pointer"
            >
                <font-awesome-icon icon="clock" style="font-size: 15px" />
            Total Events Played: {{ stats.total_events_played }}
          </span>
          <span
            class="flex-auto mb-5 text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle border border-gray-300 cursor-pointer"
            >
              <font-awesome-icon icon="user" style="font-size: 15px" />
            Total Players: {{ stats.total_players }}</span
          >
          <!--span
            class="flex-auto mb-5 text-sm font-medium bg-blue-100 py-1 px-2 rounded text-blue-500 align-middle"
            >Last refreshed at
            {{ $dayjs(last_refreshed).format("YYYY/MM/DD HH:mm:ss Z") }}</span
          -->
        </div>

        <!--div class="mb-5">
          <SearchInput />
        </div-->

        <!--button
          @click="reload"
          class="mr-5 transition duration-300 shadow-lg hover:shadow-none w-full  text-white bg-nuxt-lightgreen font-bold py-2 px-6 rounded-md
         "
        >
          <font-awesome-icon icon="sync" style="font-size: 15px" />
        Refresh
        </button-->
      </div>

      <div class="flex flex-wrap relative">
        <transition name="fade">
          <Nuxt class="w-full" />
        </transition>
      </div>

      <div class="flex flex-wrap text-sm">
        <button
          class="flex-auto mb-5 mr-1 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-1 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="
            openUrl(
              'https://docs.google.com/spreadsheets/d/1IPGK_kCgdqSLwcFjzgeLsRW7qV3MLCgcSBABdZHtK4o/edit?usp=sharing'
            )
          "
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          S3 Leaderboard
        </button>

        <button
          class="flex-auto mb-5 mr-1 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-1 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="
            openUrl(
              'https://www.mariokartcentral.com/forums/index.php?threads/s3-mk8dx-150cc-lounge-rules-updated-7-6-20.4716/'
            )
          "
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          [S3] MK8DX 150cc Lounge Rules
        </button>

        <button
          class="flex-auto mb-5 mr-1 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-1 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="
            openUrl(
              'https://www.mariokartcentral.com/forums/index.php?threads/how-to-submit-tables-using-mk8dx-bot.7024/'
            )
          "
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          How to submit tables using MK8DX Bot
        </button>

        <button
          class="flex-auto mb-5 mr-1 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-1 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="
            openUrl(
              'https://discord.com/oauth2/authorize?client_id=743532508343304242&permissions=8192&scope=bot'
            )
          "
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          Stats Bot
        </button>

        <button
          class="flex-auto mb-5 mr-1 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-2 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="openUrl('https://gb.hlorenzi.com/table')"
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          Table Maker | Lorenzi's Game Boards
        </button>

        <button
          class="flex-auto mb-5 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-2 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="openUrl('https://vikemk.github.io/Lounge-MMR-Calculator/')"
        >
          <font-awesome-icon icon="link" style="font-size: 13px" />
          MMR Calculator
        </button>

        <button
          class="flex-auto mb-5 w-auto bg-white hover:bg-gray-100 font-semibold py-1 px-1 border text-gray-600 dark:text-gray-400 border-gray-400 rounded-full dark:border-gray-800 bg-white dark:bg-gray-900"
          @click="openUrl('https://discord.com/invite/revmGkE')"
        >
          <font-awesome-icon
            :icon="['fab', 'discord']"
            style="font-size: 14px"
          />
          MK8DX 150cc Lounge Discord
        </button>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['stats'])
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
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
};
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

body {
  
}
</style>
