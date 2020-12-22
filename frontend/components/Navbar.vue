<template>

<nav
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900"
    @click="scrollToTop()"
  >
    <div class="container mx-auto px-4 lg:px-8 flex-1">
      <div class="flex items-center justify-between h-16">
        <div class="w-1/12" @click.stop="noop">
      
        <!--img src="@/assets/images/logo.gif" alt="" class="rounded-full" width="50px"-->
    
          <NuxtLink
            to="/"
            class="text-md font-bold tracking-tight flex items-center flex-shrink-0"
            style="width: 204px;"
          >MK8DX 150cc Lounge</NuxtLink>
        </div>

        <div class="flex items-center justify-end w-1/2">

        <SearchInput/>
        <ColorSwitcher class="ml-3"/>

        </div>

        <!--div class="flex items-center justify-end w-1/12">

        <ColorSwitcher/>

        </div-->

      </div>
    </div>
     
  </nav>

</template>

<script>
export default {
methods: {
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {}
  }
}
</script>