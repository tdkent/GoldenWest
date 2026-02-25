<script setup lang="ts">
	import type { NavLink } from '~/types/types';

	interface Props {
		navLinks: NavLink[];
	}

	const { navLinks } = defineProps<Props>();
</script>

<template>
	<nav>
		<ul class="my-4 flex gap-12">
			<li
				v-for="link in navLinks"
				:key="link.label"
				class="">
				<NuxtLink
					class="font-serif text-xl font-light hover:text-yellow-600"
					:to="link.to">
					{{ link.label }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="css">
	.router-link-active {
		color: #de911d;
	}
</style>
