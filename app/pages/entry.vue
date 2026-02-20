<script setup lang="ts">
	useHead({ title: 'Entry Form' });
</script>

<template>
	<div class="main-content inner-padding">
		<h2>Entry</h2>
		<section>
			<UDivider label="Entry Form" />
			<div class="inner-padding">
				<p>
					Please fill out and submit the
					<NuxtLink
						to="https://docs.google.com/forms/d/1E5mWcXPFipDCXZm8XVWfQImc6C6C26KjCaV-8Q7NyR4"
						target="_blank"
						rel="noopener"
						class="link font-semibold">
						entry form (Google Docs)</NuxtLink
					>
				</p>
			</div>
		</section>
		<section>
			<UDivider label="Form Submission" />
			<div class="inner-padding">
<p>Your Entry Forms should be submitted in two parts:</p>
<ol class="list-decimal list-inside flex flex-col gap-4 p-4">
	<li>Please submit your table reservation <strong>with payment</strong> no later than October 1, 2026. No tables will be held or reserved without payment. You must have a paid table reservation before you submit your model lists.</li>
	<li>Please check your qualified models and submit your model lists <strong>with payment</strong> no later than October 25, 2026.</li>
</ol>
<p class="my-4">After you submit the model form that comes after your table entry, pay the model fees. They are $1.00 per horse <strong>per class</strong> after the classes that come with your selected table size.</p>
<p>Example: a model is entered in QH breed and QH workmanship. This would be $2.00.</p>
			</div>
		</section>
	</div>
</template>
