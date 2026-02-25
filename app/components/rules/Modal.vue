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
	<MainModal
		v-model="isOpen"
		:header="CARD_MODAL_HEADER"
		:close="closeModal">
		<RulesModalContent />
	</MainModal>
</template>
