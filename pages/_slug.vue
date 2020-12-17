<template>
  <div class="flex flex-wrap-reverse mb-5">
    <div>
      <article class="lg:px-8">
        <h1 class="text-xl mb-8 mt-8" >{{this.article.title}}</h1>
        <nuxt-content :document="article" class="mb-10" />
      </article>
    </div>

    <adsbygoogle :ad-slot="process.env.ADSLOT_SLUG_BOTTOM" style="margin-bottom: 1em" />

  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.slug || "index").fetch();
    return { article };
  },
  head() {
    return {
      title: this.article.title
    }
  }
}
</script>

<style lang="scss" scoped>
</style>