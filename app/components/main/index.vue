<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<main
		class="mx-auto my-12 min-h-[calc(100vh-var(--header-height-sm)-var(--footer-height)-5rem)] max-w-screen-xl px-6 md:my-16 lg:min-h-[calc(100vh-var(--header-height-lg)-var(--footer-height)-5rem)]">
		<slot />
	</main>
</template>
