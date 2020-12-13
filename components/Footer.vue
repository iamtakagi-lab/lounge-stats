<template>
   <footer class="h-24 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <a class="mr-2 text-sm leading-none" href="https://150cc-lounge.glitch.me" target="_blank" rel="noopener">
        &copy; {{ new Date().getFullYear() }} MK8DX 150cc Lounge
        </a>
      </div>

      <div class="flex items-center">
        <a href="https://www.mariokartcentral.com/forums/index.php?forums/mk8dx-150cc-lounge.249/" class="mr-2 text-sm leading-none">
        MK8DX 150cc Lounge Forums
        </a>
      </div>

      <div class="flex items-center">
        <a href="https://docs.google.com/spreadsheets/d/1IPGK_kCgdqSLwcFjzgeLsRW7qV3MLCgcSBABdZHtK4o/edit?usp=sharing" class="mr-2 text-sm leading-none">
        S3 Leaderboard
        </a>
      </div>

      <div class="flex items-center">
        <NuxtLink to="/credits" class="mr-2 text-sm leading-none">Credits</NuxtLink>
      </div>
    </div>
  </footer>
</template>
