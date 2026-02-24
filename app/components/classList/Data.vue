<script setup lang="ts">
	import { API_URL } from '~/constants';
	import type { AccordionItem } from '~/types/accordion.types';
	import type { Division, Day1Class } from '~/types/class-list.types';

	interface Props {
		day: number;
		columns: { label: string; key: string }[];
	}

	const { day, columns } = defineProps<Props>();

	const {
		data: divisions,
		pending,
		error,
	} = await useFetch<Division[]>(`${API_URL}/db_day${day}.json`, {
		server: false,
		default: () => [],
	});

	const accordionItems = computed<AccordionItem[]>(() =>
		divisions.value.map((division) => ({
			label: division.divNames.join(', '),
			slot: 'ring-data',
			division,
			closeOthers: true
		}))
	);
</script>

<!-- ClientOnly prevents hydration mismatch by rendering all in the browser instead of SSR. -->

<template>
	<ClientOnly>
		<ClassListLoading
			v-if="pending"
			class="flex w-full flex-col gap-4" />
		<p
			v-else-if="error"
			class="text-red-500 p-4">
			An error occurred while trying to fetch the class list. Please try again.
		</p>
		<div
			v-else
			class="w-full">
			<UAccordion
				color="black"
				variant="ghost"
				size="lg"
				class="my-4 lg:my-8"
				:items="accordionItems">
				<template #ring-data="{ item }">
					<UDivider
						class="px-6 pt-0"
						:ui="{ border: { base: 'dark:border-blue-700' } }" />
					<div>
						<p
							v-if="item.division.notes"
							class="mb-8 px-4 text-sm md:text-base">
							Note: {{ item.division.notes }}
						</p>

						<div
							v-for="section in item.division.sections"
							:key="section.id">
							<div class="px-4 md:text-lg">{{ section.name }}</div>

							<p
								v-if="section.notes"
								class="my-8 px-4 text-sm md:text-base">
								Note: {{ section.notes }}
							</p>

							<div class="my-4">
								<UTable
									:columns="columns"
									:rows="section.classes" />
							</div>

							<div v-if="section.ribbon" class="mb-8 mt-4 flex items-center gap-1 px-2 md:text-lg md:gap-2">
								<img
									alt="Small ribbon icon"
									role="img"
									class="h-6 w-6 lg:h-7 lg:w-7"
									src="~/assets/icon/FluentRibbon20Regular.svg" />
								{{ section.ribbon }}
							</div>

							<UDivider
								class="px-6 pt-0"
								:ui="{ border: { base: 'dark:border-blue-700' } }" />
						</div>

						<div class="flex flex-col gap-4 px-2">
							<div
								v-for="ribbon in item.division.divRibbons"
								:key="ribbon"
								class="flex items-center gap-1 md:text-lg md:gap-2">
								<img
									alt="Small ribbon icon"
									role="img"
									class="h-6 w-6 lg:h-7 lg:w-7"
									src="~/assets/icon/FluentRibbonStar20Regular.svg" />
								{{ ribbon }}
							</div>
						</div>
					</div>
				</template>
			</UAccordion>
		</div>
	</ClientOnly>
</template>
