<script setup lang="ts">
	// Metadata
	useHead({
		title: 'How the Show Works',
	});
	// Intersection API
	const intersectPoint: globalThis.Ref<Element | null> = ref(null);
	const showButton = ref(false);
	onMounted(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(intersectPoint.value as Element);
	});
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				showButton.value = true;
			} else showButton.value = false;
		});
	};
	// Viewport
	const viewport = useViewport();
</script>

<template>
	<div class="main-content relative">
		<h2>How the Show Works</h2>
		<RulesBackToTop
			v-if="viewport.isLessThan('lg')"
			:show="showButton" />
		<div ref="intersectPoint" />
		<div>
			<ShowContent class="lg:col-span-3" />
		</div>
	</div>
</template>
