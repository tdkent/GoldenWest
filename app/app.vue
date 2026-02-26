<script setup lang="ts">
	import { CANONICAL_URL, SITE_DESCRIPTION, SITE_TITLE } from '~/lib/constants';

	useHead({
		htmlAttrs: { lang: 'en' },
		meta: [
			{ name: 'description', content: SITE_DESCRIPTION },
			{ name: 'robots', content: 'index, follow' },
		],
		link: [
			{ rel: 'canonical', href: CANONICAL_URL },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', href: '/icon@16.png', sizes:'16x16' },
			{ rel: 'icon', type: 'image/png', href: '/icon@32.png', sizes:'32x32' },
			{ rel: 'icon', type: 'image/png', href: '/icon@64.png', sizes:'64x64' },
			{
				rel: 'apple-touch-icon',
				type: 'image/png',
				href: '/apple-touch-icon.png',
			},
			{ rel: 'manifest', href: '/manifest.json' },
		],
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - ${SITE_TITLE}` : SITE_TITLE;
		},
	});

	useSeoMeta({
		ogDescription: SITE_DESCRIPTION,
		ogImage: `${CANONICAL_URL}/icon-512.png`,
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
