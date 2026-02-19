<script setup lang="ts">
	// Imports
	import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
	// Metadata
	useHead({
		title: 'Entry Form',
	});
</script>

<template>
	<div class="main-content inner-padding">
		<h2>Entry</h2>
		<!-- FORM -->
		<section>
			<UDivider label="Entry Form" />
			<div class="inner-padding">
				<p>
					Please fill out and submit the
					<NuxtLink
						to="https://docs.google.com/forms/d/1wkpO0IPwd7Ci24hHnRyC1onqKXaxWDAVcGb__BI6Z5A"
						target="_blank"
						rel="noopener"
						class="link font-semibold">
						entry form (Google Docs)</NuxtLink
					>
				</p>
			</div>
		</section>
	</div>
</template>
