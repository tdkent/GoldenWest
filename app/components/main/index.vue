<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<main
		class="mx-auto min-h-[calc(100vh-var(--header-height-sm)-var(--footer-height)-5rem)] max-w-screen-xl my-12 md:my-16 px-6 lg:min-h-[calc(100vh-var(--header-height-lg)-var(--footer-height)-5rem)]"
		>
		<slot />
	</main>
</template>
