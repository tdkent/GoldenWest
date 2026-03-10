<script setup lang="ts">
	import { CANONICAL_URL, SITE_DESCRIPTION, SITE_TITLE } from '~/lib/constants';

	useHead({
		htmlAttrs: { lang: 'en' },
		meta: [
			{ name: 'description', content: SITE_DESCRIPTION },
			{ name: 'robots', content: 'index, follow' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', href: '/icon@16.png', sizes: '16x16' },
			{ rel: 'icon', type: 'image/png', href: '/icon@32.png', sizes: '32x32' },
			{ rel: 'icon', type: 'image/png', href: '/icon@64.png', sizes: '64x64' },
			{
				rel: 'apple-touch-icon',
				type: 'image/png',
				href: '/apple-touch-icon.png',
			},
			{ rel: 'manifest', href: '/manifest.json' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossorigin: 'anonymous',
			},
			{
				rel: 'preload',
				href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Mate+SC&family=Open+Sans:wght@300..800&family=Urbanist:wght@300&display=swap',
				as: 'style',
				onload: "this.onload=null;this.rel='stylesheet'",
			},
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
