<script setup lang="ts">
	import { CANONICAL_URL, SITE_DESCRIPTION, SITE_TITLE } from '~/lib/constants';

	useHead({
		htmlAttrs: { lang: 'en' },
		meta: [
			{ name: 'description', content: SITE_DESCRIPTION },
			{ name: 'robots', content: 'index, follow' },
		],
		link: [{ rel: 'canonical', href: CANONICAL_URL }],
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - ${SITE_TITLE}` : SITE_TITLE;
		},
	});

	useSeoMeta({
		ogDescription: SITE_DESCRIPTION,
		ogImage: 'URL HERE',
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
