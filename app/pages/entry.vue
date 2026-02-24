<script setup lang="ts">
	import { DocumentTextIcon } from '@heroicons/vue/24/outline';
	useHead({ title: 'Entry Form' });
</script>

<template>
	<div class="main-content">
		<h2>Entry</h2>
		<section>
			<UDivider />
			<div class="inner-padding">
				<p>Please fill out and submit the form below:</p>
				<div class="flex items-center gap-2">
					<DocumentTextIcon class="my-6 size-6 stroke-1" />
					<NuxtLink
						to="https://docs.google.com/forms/d/1E5mWcXPFipDCXZm8XVWfQImc6C6C26KjCaV-8Q7NyR4"
						target="_blank"
						rel="noopener"
						class="link text-lg font-bold">
						Google Docs Entry Form
					</NuxtLink>
				</div>
				<p class="mt-6">Your entry form should be submitted in two parts:</p>
				<ol class="flex list-inside list-decimal flex-col gap-4 p-4">
					<li>
						Please submit your table reservation
						<strong>with payment</strong> no later than October 1, 2026. No
						tables will be held or reserved without payment. You must have a
						paid table reservation before you submit your model lists.
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
		</section>
	</div>
</template>
