<script setup lang="ts">
	import { CANONICAL_URL } from '~/lib/constants';

	const description =
		'Description, show rules and location information for the Golden West Model Horse Show Region 2 Championship in November, 2026.';

	useHead({
		htmlAttrs: { lang: 'en' },
		meta: [
			{ name: 'description', content: description },
			{ name: 'robots', content: 'index, follow' },
		],
		link: [{ rel: 'canonical', href: CANONICAL_URL }],
		titleTemplate: (titleChunk) => {
			return titleChunk
				? `${titleChunk} - Golden West Model Horse Show Region 2 Championship`
				: 'Golden West Model Horse Show Region 2 Championship';
		},
	});

	useSeoMeta({
		ogDescription: description,
		ogImage: 'URL HERE',
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
