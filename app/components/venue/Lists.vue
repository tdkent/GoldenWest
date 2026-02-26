<script setup lang="ts">
	import type { VenueList } from '~/lib/types';

	const venueLists: VenueList[] = [
		{
			label: 'Nearby Restaurants',
			items: [
				{
					name: 'Crepeville',
					url: 'https://www.crepeville.com',
				},
				{
					name: 'Guads Tacos & Beer',
					url: 'https://guadsdavis.com',
				},
				{
					name: "Shah's Halal Food (Truck)",
					url: 'https://places.singleplatform.com/shahs-halal-food-5',
				},
				{
					name: 'Taqueria Guadalajara',
					url: 'https://tgtacos.com',
				},
			],
		},
		{
			label: 'Nearby Hotels',
			items: [
				{
					name: 'Aggie Inn',
					url: null,
				},
				{
					name: 'Best Western Palm Court',
					url: 'https://www.bestwestern.com/en_US/book/hotels-in-davis/best-western-plus-palm-court-hotel/propertyCode.05536.html',
				},
				{
					name: 'Econo Lodge Woodland',
					url: null,
				},
				{
					name: 'Hilton Garden Inn',
					url: 'https://www.hilton.com/en/hotels/smfdagi-hilton-garden-inn-davis-downtown/',
				},
				{
					name: 'Motel 6 Dixon',
					url: 'https://www.motel6.com/property/motel-dixon-california-us-293718',
				},
			],
		},
	];
</script>
<template>
	<section
		v-for="list in venueLists"
		:key="list.label">
		<UDivider :label="list.label" />
		<h2 class="sr-only">{{ list.label }}</h2>
		<ul class="flex flex-col items-center divide-y-0 divide-gray-700">
			<li
				v-for="item in list.items"
				:key="item.name"
				class="w-full py-4">
				<div
					v-if="item.url"
					class="flex items-center gap-3">
					<NuxtLink
						target="_blank"
						rel="noopener"
						:to="item.url"
						class="link">
						{{ item.name }}
					</NuxtLink>
				</div>
				<span v-else>{{ item.name }}</span>
			</li>
		</ul>
	</section>
</template>
