<script setup lang="ts">
	const mockDivs = Array.from({ length: 6 }, (_, idx) => ({
		id: idx + 1,
	}));
</script>

<template>
	<div class="flex w-full flex-col gap-4">
		<USkeleton
			v-for="div in mockDivs"
			class="h-12 w-full rounded-none"
			:key="div.id" />
	</div>
</template>
