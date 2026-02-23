<script setup lang="ts">
	import { API_URL } from '~/constants';
import type { AccordionItem } from '~/types/accordion.types';
	import type { Division } from '~/types/class-list.types';
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
    division
  }))
)
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error loading data</div>
	<div v-else>
		<UAccordion
			multiple
			color="black"
			variant="ghost"
			size="xl"
			class="inner-padding my-4 lg:my-8"
			:items="accordionItems">
			<template #ring-data="{ item }">
				<UDivider
					class="px-6 pt-0"
					:ui="{ border: { base: 'dark:border-blue-700' } }" />
				<div class="">
					<div
						v-for="section in item.division.sections"
						:key="section.id"
						class="">

						<div class="px-4">{{ section.name }}</div>

					</div>
				</div>
			</template>
		</UAccordion>
	</div>
</template>
