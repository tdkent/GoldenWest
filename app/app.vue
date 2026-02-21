<script setup lang="ts">
	useHead({
		meta: [
			{
				name: 'description',
				content:
					'Description, show rules and location information for the Golden West Model Horse Show Region 2 Championship in November, 2026.',
			},
		],
		htmlAttrs: {
			lang: 'en',
		},
		titleTemplate: (titleChunk) => {
			return titleChunk
				? `${titleChunk} - Golden West Model Horse Show Region 2 Championship`
				: 'Golden West Model Horse Show Region 2 Championship';
		},
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
