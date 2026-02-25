<script setup lang="ts">
	import type { NavLink } from '~/types/types';

	const viewport = useViewport();

	const navLinks: NavLink[] = [
		{
			label: 'Home',
			to: '/',
		},

		{
			label: 'Class List',
			to: '/class-list',
		},

		{
			label: 'Show Rules',
			to: '/show-rules',
		},

		{
			label: 'How the Show Works',
			to: '/how-the-show-works',
		},

		{
			label: 'Venue & Lodging',
			to: '/venue-lodging',
		},

		{
			label: 'Entry Form',
			to: '/entry',
		},
	];
</script>

<template>
	<header id="header">
		<div class="border-b">
			<div class="mx-auto max-w-screen-xl">
				<div class="flex flex-col pt-2 md:px-8 lg:pt-4 xl:px-4">
					<div class="flex items-center justify-between">
						<HeaderNavMobile
							v-if="viewport.isLessThan('lg')"
							:navLinks="navLinks" />
						<HeaderText />
						<HeaderDarkModeSwitch v-if="viewport.isLessThan('lg')" />
					</div>
					<div
						v-if="viewport.isGreaterOrEquals('lg')"
						class="flex justify-between">
						<HeaderNavDesktop :navLinks="navLinks" />
						<HeaderDarkModeSwitch />
					</div>
				</div>
			</div>
		</div>
		<HeaderSplash />
	</header>
</template>
