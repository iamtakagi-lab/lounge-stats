<template>
  <footer
    class="h-24 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900"
  >
    <div
      class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between"
    >
      <div class="flex items-center">
        <a
          class="mr-2 text-sm leading-none"
          href="https://150cc-lounge.glitch.me"
          target="_blank"
          rel="noopener"
        >
          &copy; {{ new Date().getFullYear() }} MK8DX 150cc Lounge
        </a>
      </div>

      <div class="flex items-center">
        <a
          href="https://www.mariokartcentral.com/forums/index.php?forums/mk8dx-150cc-lounge.249/"
          class="mr-2 text-sm leading-none"
        >
          MK8DX 150cc Lounge Forums
        </a>
      </div>

      <div class="flex items-center">
        <NuxtLink to="/credits" class="mr-2 text-sm leading-none"
          >Credits</NuxtLink
        >
      </div>

      <div class="flex items-center">
        <a
          href="https://github.com/iam-takagi/lounge-stats"
          target="_blank"
          rel="noopener noreferrer"
            class="rounded-md hover:text-blue-500 focus:outline-none transition ease-in-out duration-150 focus:outline-none"
          ><icon-github/>
        </a>
      </div>
    </div>
  </footer>
</template>
