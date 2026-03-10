<script setup lang="ts">
	import { currentYear } from '~/lib/dates';
</script>

<template>
	<footer
		class="min-h-24 border-t border-gray-400 bg-gray-200 p-4 text-gray-700 lg:px-12 dark:bg-gray-800 dark:text-gray-100">
		<div
			class="mx-auto flex w-full max-w-screen-lg flex-col items-start gap-2.5 text-xs">
			<details>
				<summary class="cursor-pointer">Image Attributions</summary>
				<ul class="flex flex-col gap-2 list-disc list-inside p-2">
					<li>
						<NuxtLink
							href="https://commons.wikimedia.org/wiki/File:Th%C3%A9odore_Gericault,_Flayed_Horse_II,_model_c._1820-1824,_cast_c._1832,_NGA_57647.jpg"
							target="_blank"
							rel="noopener"
							>Théodore Géricault</NuxtLink
						>, CC0, via Wikimedia Commons
					</li>
					<li>
						<NuxtLink
							href="https://commons.wikimedia.org/wiki/File:Horse_MET_DP-214-002.jpg"
							target="_blank"
							rel="noopener"
							>Giambologna</NuxtLink
						>, CC0, via Wikimedia Commons
					</li>
					<li>
						<NuxtLink
							href="https://commons.wikimedia.org/wiki/File:Horse_with_Jockey;_Horse_Galloping_on_the_Right_Foot,_the_Back_Left_Foot_Only_Touching_the_Ground_MET_ES7547.jpg"
							target="_blank"
							rel="noopener"
							>Edgar Degas</NuxtLink
						>, CC0, via Wikimedia Commons
					</li>
					<li>
						<NuxtLink
							href="https://commons.wikimedia.org/wiki/File:Antoine-Louis_Barye,_Half-Blooded_Horse,_with_Head_Down,_model_n.d.,_cast_c._1845-1873,_NGA_177398.jpg"
							target="_blank"
							rel="noopener"
							>National Gallery of Art</NuxtLink
						>, CC0, via Wikimedia Commons
					</li>
				</ul>
			</details>
			<p>Copyright &copy; {{ currentYear }} Golden West Model Horse Show</p>
		</div>
	</footer>
</template>
