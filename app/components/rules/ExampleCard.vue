<script setup lang="ts">
	// Internal Imports
	import { CARD_MODAL_HEADER } from '~/constants';
	// Modal
	const isOpen = ref(false);
	function closeModal() {
		isOpen.value = false;
	}
</script>

<template>
	<NuxtLink
		role="button"
		class="link my-2 block w-fit"
		@click="isOpen = true"
		>View 3x5 card format example</NuxtLink
	>
	<SharedModal
		v-model="isOpen"
		:header="CARD_MODAL_HEADER"
		:close="closeModal">
			<div class="flex flex-col items-center justify-center gap-4">
		<div
			class="relative flex aspect-[5/3] w-4/5 flex-col items-center justify-center gap-4 border border-gray-400 font-splash shadow-[4px_4px_1px_0_rgba(0,0,0,0.2)] dark:shadow-gray-100">
			<span class="block">Class Number and Class Name</span>
			<span>Breed</span>
			<span>Gender</span>
			<span class="absolute bottom-1 right-2 text-xs">Front</span>
		</div>
		<div
			class="relative flex aspect-[5/3] w-4/5 flex-col items-center justify-center gap-4 border border-gray-400 font-splash shadow-[4px_4px_1px_0_rgba(0,0,0,0.2)] dark:shadow-gray-100">
			<span class="block">Exhibitor Name</span>
			<span class="block">"Model Name"</span>
			<span class="absolute bottom-1 right-2 text-xs">Back</span>
		</div>
	</div>
	</SharedModal>
</template>
