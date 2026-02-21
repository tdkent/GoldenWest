<script setup lang="ts">
	import { currentYear } from '#imports';
</script>

<template>
	<footer
		class="h-24 border-t border-gray-400 bg-gray-200 p-4 text-gray-700 lg:px-12 dark:bg-gray-800 dark:text-gray-100">
		<div
			class="mx-auto flex w-full max-w-screen-lg flex-col items-start gap-2.5 text-xs">
			<p>Copyright &copy; {{ currentYear }} Golden West Model Horse Show</p>
		</div>
	</footer>
</template>
