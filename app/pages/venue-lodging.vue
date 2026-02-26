<script setup lang="ts">
	useHead({
		title: 'Venue & Lodging',
	});
</script>

<template>
	<div class="main-content">
		<h1>Venue &amp; Lodging</h1>
		<section>
			<UDivider label="Event Location" />
			<h2 class="sr-only">Event Location</h2>
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
