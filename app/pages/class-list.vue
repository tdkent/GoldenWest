<script setup lang="ts">
	import { CANONICAL_URL } from '~/lib/constants';
	import { dayOneDayOfWeek, dayTwoDayOfWeek } from '~/lib/dates';
	import { API_URL } from '~/lib/constants';

	const title = 'Class List';

	const fileName = 'GW_R2C_ClassList_2026';
	const wordUrl = `${API_URL}/files/${fileName}.docx`;
	const pdfUrl = `${API_URL}/files/${fileName}.pdf`;

	useHead({ title, link: [{rel: 'canonical', href: `${CANONICAL_URL}/class-list`}] });

	useSeoMeta({
		ogTitle: title,
		ogUrl: `${CANONICAL_URL}/class-list`,
	});

	useJsonld({
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Class List',
		about: {
			'@id': 'https://yoursite.com/#event',
		},
	});

	const days = [
		{
			id: 1,
			date: dayOneDayOfWeek,
			columns: [
				{ label: 'Breed Class#', key: 'breedId' },
				{ label: 'Collect. Class#', key: 'collectId' },
				{ label: 'Name', key: 'name' },
			],
		},
		{
			id: 2,
			date: dayTwoDayOfWeek,
			columns: [
				{ label: 'Class#', key: 'id' },
				{ label: 'Name', key: 'name' },
			],
		},
	];
</script>

<template>
	<div class="main-content">
		<header>
			<h1>Class List</h1>
			<p class="mt-8 text-center font-serif text-lg md:text-xl">
				Note: "LC" means "Last Chance" or unqualified models class.
			</p>
			<div class="my-8 flex flex-col items-center justify-center gap-6">
				<UButton
					icon="i-heroicons-document-arrow-down"
					label="Download MS Word"
					size="lg"
					variant="outline"
					class="font-bold transition-all duration-200 hover:scale-110"
					:to="wordUrl"
					:filename="`${fileName}.docx`"
					title="Download Class List in Word Format"
					download />
				<UButton
					icon="i-heroicons-document-arrow-down"
					label="Download PDF"
					size="lg"
					variant="outline"
					class="font-bold transition-all duration-200 hover:scale-110"
					:to="pdfUrl"
					target="_blank"
					:filename="`${fileName}.pdf`"
					title="Download Class List in PDF Format"
					download />
			</div>
		</header>
		<section v-for="day of days.sort((a, b) => a.id - b.id)">
			<UDivider :label="day.date" />
			<h2 class="sr-only">{{ day.date }} Class List</h2>
			<ClassListData
				:day="day.id"
				:columns="day.columns" />
		</section>
	</div>
</template>
