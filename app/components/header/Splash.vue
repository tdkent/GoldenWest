<script setup lang="ts">
	import { API_URL } from '~/lib/constants';
	import createSrcSets from '~/lib/img';
	const route = useRoute();
	const imgBaseUrl = `${API_URL}/assets`;
</script>

<template>
	<div
		v-if="route.path === '/'"
		class="relative flex aspect-[7/5] max-h-[500px] w-full items-center justify-center overflow-hidden md:h-auto md:max-h-[500px] lg:justify-end">
		<picture
			class="splash-slide animate-slide-1 md:object-[0%_20%] lg:object-[0%_14%]">
			<source
				:srcset="createSrcSets(1).avif"
				type="image/avif" />
			<source
				:srcset="createSrcSets(1).webp"
				type="image/webp" />
			<img
				:src="`${imgBaseUrl}/model-horse-1/model-horse-1@1280.jpeg`"
				:srcset="createSrcSets(1).jpeg"
				fetchpriority="high"
				alt="Model horse" />
		</picture>
		<picture
			class="splash-slide animate-slide-2 md:object-[0%_30%] lg:object-[0%_20%]">
			<source
				:srcset="createSrcSets(4).avif"
				type="image/avif" />
			<source
				:srcset="createSrcSets(4).webp"
				type="image/webp" />
			<img
				:src="`${imgBaseUrl}/model-horse-4/model-horse-4@1280.jpeg`"
				:srcset="createSrcSets(4).jpeg"
				fetchpriority="high"
				alt="Model horse" />
		</picture>
		<picture class="splash-slide animate-slide-3 md:object-[0%_5%]">
			<source
				:srcset="createSrcSets(3).avif"
				type="image/avif" />
			<source
				:srcset="createSrcSets(3).webp"
				type="image/webp" />
			<img
				:src="`${imgBaseUrl}/model-horse-3/model-horse-3@1280.jpeg`"
				:srcset="createSrcSets(3).jpeg"
				fetchpriority="high"
				alt="Model horse with show ribbons" />
		</picture>
		<picture class="splash-slide animate-slide-4 md:object-[0%_20%]">
			<source
				:srcset="createSrcSets(2).avif"
				type="image/avif" />
			<source
				:srcset="createSrcSets(2).webp"
				type="image/webp" />
			<img
				:src="`${imgBaseUrl}/model-horse-2/model-horse-2@1280.jpeg`"
				:srcset="createSrcSets(2).jpeg"
				fetchpriority="high"
				alt="Model horse with show ribbons" />
		</picture>
		<div
			class="absolute h-full w-full bg-[linear-gradient(to_right,rgba(222,145,29,0.9),rgba(247,201,72,0.7),rgba(247,201,72,0.8),rgba(64,195,247,0.7))]"></div>
		<HeaderTaglines />
	</div>
</template>
