<script setup lang="ts">
	import { CANONICAL_URL } from '~/lib/constants';

	const title = 'Entry Form';
	const formUrl =
		'https://docs.google.com/forms/d/1E5mWcXPFipDCXZm8XVWfQImc6C6C26KjCaV-8Q7NyR4';

	useHead({
		title,
		link: [{ rel: 'canonical', href: `${CANONICAL_URL}/entry` }],
	});

	useSeoMeta({
		ogTitle: title,
		ogUrl: `${CANONICAL_URL}/entry`,
	});

	const viewport = useViewport();
</script>

<template>
	<div class="main-content">
		<header>
			<h1>Entry Form</h1>
		</header>
		<UDivider />
		<div class="show-rules">
			<p>Please fill out and submit the form below:</p>
			<UButton
				label="Google Docs Entry Form"
				icon="i-heroicons-document-text"
				:size="viewport.isLessThan('md') ? 'lg' : 'xl'"
				variant="outline"
				class="my-10 ml-2 text-sm font-bold transition-all duration-200 hover:scale-110 lg:my-12"
				:to="formUrl"
				target="_blank"
				rel="noopener" />
			<p>Your entry form should be submitted in two parts:</p>
			<ol class="flex list-inside list-decimal flex-col gap-4 p-4">
				<li>
					Please submit your table reservation
					<strong>with payment</strong> no later than October 1, 2026. No tables
					will be held or reserved without payment. You must have a paid table
					reservation before you submit your model lists.
				</li>
				<li>
					Please check your qualified models and submit your model lists
					<strong>with payment</strong> no later than October 25, 2026.
				</li>
			</ol>
			<p class="my-4">
				After you submit the model form that comes after your table entry, pay
				the model fees. They are $1.00 per horse
				<strong>per class</strong> after the classes that come with your
				selected table size.
			</p>
			<p>
				Example: a model is entered in QH breed and QH workmanship. This would
				be $2.00.
			</p>
		</div>
	</div>
</template>
