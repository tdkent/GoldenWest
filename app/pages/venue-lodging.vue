<script setup lang="ts">
	// Imports
	import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
	// Metadata
	useHead({
		title: 'Venue & Lodging',
	});
</script>

<template>
	<div class="main-content">
		<h2>Venue &amp; Lodging</h2>
		<section>
			<UDivider label="Location" />
			<div class="my-4 flex flex-col justify-center gap-8">
				<p>
					The show will be held at:
					<span class="mt-4 block">Davis Senior Center</span>
					<span class="block">646 A St, Davis, CA</span>
				</p>
				<div class="flex items-center gap-1">
					<NuxtLink
						href="https://maps.app.goo.gl/JfvqLkyeedrV7HcB7"
						target="_blank"
						rel="noopener"
						class="link">
						View on Google Maps
					</NuxtLink>
				</div>
			</div>
		</section>
		<VenueLists />
	</div>
</template>
