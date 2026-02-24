<script setup lang="ts">
	import { dayOneDayOfWeek, dayTwoDayOfWeek } from '#imports';

	useHead({
		title: 'Class List',
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
		<h2>Class List</h2>
		<p class="mt-8 text-center font-serif text-lg md:text-xl">
			Note: "LC" means "Last Chance" or unqualified models class.
		</p>
		<section v-for="day of days.sort((a, b) => a.id - b.id)">
			<UDivider :label="day.date" />
			<ClassListData
				:day="day.id"
				:columns="day.columns" />
		</section>
	</div>
</template>
