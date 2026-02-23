<script setup lang="ts">
	import { API_URL } from '~/constants';
	import type { AccordionItem } from '~/types/accordion.types';
	import type { Division, Day1Class } from '~/types/class-list.types';
	const {
		data: divisions,
		pending,
		error,
	} = await useFetch<Division[]>(`${API_URL}/db_day1.json`, {
		server: false,
		default: () => [],
	});

	const accordionItems = computed<AccordionItem[]>(() =>
		divisions.value.map((division) => ({
			label: division.divNames.join(', '),
			slot: 'ring-data',
			division,
		}))
	);
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error loading data</div>
	<div v-else class="w-full">
		<UAccordion
			color="black"
			variant="ghost"
			size="lg"
			class=" my-4 lg:my-8"
			:items="accordionItems">
			<template #ring-data="{ item }">
				<UDivider
					class="px-6 pt-0"
					:ui="{ border: { base: 'dark:border-blue-700' } }" />
				<div>
					
					<p
						v-if="item.division.notes"
						class="text-sm">
						Please note: {{ item.division.notes }}
					</p>

					<div
						v-for="section in item.division.sections"
						:key="section.id"
						>
						
						<div class="px-4">{{ section.name }}</div>

						<p
							v-if="section.notes"
							class="text-sm">
							{{ section.notes }}
						</p>

					<div class="mt-2">
						<UTable
							:rows="section.classes"
						/>
					</div>

						<div>Ribbon: {{ section.ribbon }}</div>

					</div>

					<div v-for="ribbon in item.division.divRibbons" :key="ribbon">
						{{ ribbon }}
					</div>
				</div>
			</template>
		</UAccordion>
	</div>
</template>
