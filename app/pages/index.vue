<script setup lang="ts">
	import { dayOneLongDateString, dayTwoLongDateString } from '~/lib/dates';
	
	useHead({
		title: 'Home',
	});

	const divisions = {
		day1: [
			'Breyer/Other Breed Division (Traditional & Classic sizes), Breyer/Other Collectability Division (Traditional & Classic)',
			'Breyer/Other Breed Division (Mini sizes), Breyer/Other Collectability Division (Mini sizes)',
			'Hartland Sub-Division - Breed and Collectability',
			'Stone Breed Division (Traditional), Stone Collectability Division (Traditional)',
			'Stone Mini Breed Division, Stone Mini Collectability Division',
			'OF China/Resin Division, OF China/Resin Collectability Division',
		],
		day2: [
			'Custom Division (Traditional & Classic), Custom Workmanship Division (Traditional & Classic)',
			'Custom Division (Mini and Micro Mini)',
			'Artist Resin Division (Traditional and Classic)',
			'Artist Resin Mini and Micro Mini Division',
			'Custom Glazed China Breed Halter Division',
			'Medallions',
			'Open Performance (OF & Custom)',
		],
	};
</script>

<template>
	<div class="main-content">
		<section
			class="mb-4 mt-16 flex w-full flex-col gap-12 py-4 lg:gap-20 lg:py-8">
			<div class="flex flex-col items-center gap-4">
				<span
					class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
					Event Dates
				</span>
				<div class="text-center">
					<p class="font-serif text-2xl lg:text-3xl">
						{{ dayOneLongDateString }}
					</p>
					<p class="font-serif text-2xl lg:text-3xl">
						{{ dayTwoLongDateString }}
					</p>
				</div>
				<UButton
					label="Register Now"
					size="lg"
					variant="outline"
					class="mt-4 font-semibold transition-all duration-200 hover:scale-110 lg:mt-6"
					to="/entry" />
			</div>
			<div class="flex flex-col items-center gap-4">
				<span
					class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
					Location
				</span>
				<p class="text-center font-serif text-xl lg:text-2xl">
					Davis Senior Center
					<span class="block">646 A St, Davis, CA 95616</span>
				</p>
			</div>
			<div class="flex flex-col items-center gap-4">
				<span
					class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
					Show Times
				</span>

				<ul class="text-center font-serif text-lg lg:text-xl">
					<li>Doors Open: 8 AM</li>
					<li>Show Starts: 9 AM</li>
					<li>Lunch: 12:30 PM (approx.)</li>
					<li>Show End: 5-6 PM</li>
				</ul>
			</div>
		</section>

		<section>
			<UDivider label="Divisions" />
			<div
				class="my-4 flex w-full max-w-lg flex-col items-center gap-12 py-4 lg:gap-20 lg:py-8">
				<div class="flex flex-col items-center gap-4">
					<span
						class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
						Saturday
					</span>

					<ul
						class="flex flex-col gap-4 divide-y divide-gray-700 text-sm md:text-base">
						<li
							v-for="div in divisions.day1"
							class="pt-3">
							{{ div }}
						</li>
					</ul>
				</div>

				<div class="flex flex-col items-center gap-4">
					<span
						class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
						Sunday
					</span>

					<ul
						class="flex flex-col gap-4 divide-y divide-gray-700 text-sm md:text-base">
						<li
							v-for="div in divisions.day2"
							class="pt-3">
							{{ div }}
						</li>
					</ul>
				</div>

				<UButton
					label="Register Now"
					size="lg"
					variant="outline"
					class="font-semibold transition-all duration-200 hover:scale-110"
					to="/entry" />
			</div>
		</section>
	</div>
</template>
