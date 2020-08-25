<template>
  <div class="mt-10 pt-10">

    <SearchInput/>

    <div class="text-xl mt-5">Leaderboard</div>

    

     <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto w-full relative mt-5 mb-5"
			style="height: 670px;">
			<table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
				<thead>
					<tr class="text-left">
						<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs" v-for="heading in headings" :key="heading">{{heading}}</th>
					</tr>
				</thead>
			</table>
		</div>
    </div>

  
</template>

<script lang="ts">
import Vue from 'vue'
import SearchInput from '@/components/SerachInput.vue'

export default Vue.extend({
  components: {SearchInput},
  data() {
    return {
			headings : [
        "Rank",
        "Player",
        "MMR",
        "Peak MMR",
        "Win Rate",
        "W - L (Last 10)",
        "Gain/Loss (Last 10)",
        "Events Played",
        "Largest Gain",
        "Largets Loss"
      ]
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
