<script setup lang="ts">
	const viewport = useViewport();
</script>

<template>
	<h1 class="mx-auto w-fit font-header lg:mx-0">
		<template v-if="viewport.isLessThan('lg')">
			<span class="gold-gradient mt-2 block text-center text-[16px] sm:text-lg">
				Golden West Model Horse Show
			</span>
			<span class="gold-gradient block -translate-y-2 text-center text-[22px]">
				Region 2 Championship
			</span>
		</template>
		<template v-else>
			<span class="gold-gradient text-4xl"
				>Golden West Model Horse Show Region 2 Championship</span
			>
		</template>
	</h1>
</template>
