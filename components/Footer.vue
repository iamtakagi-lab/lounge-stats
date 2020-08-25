<template>
   <footer class="h-24 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <a class="mr-2 text-sm leading-none" href="https://150cclounge.mkcentral.com" target="_blank" rel="noopener">
        &copy; {{ new Date().getFullYear() }} MK8DX 150cc Lounge
        </a>
      </div>

      <div class="flex items-center">
        <nuxt-link to="/privacy-policy" class="mr-2 text-sm leading-none">
        Privacy Policy
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
