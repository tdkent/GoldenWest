<script setup lang="ts">
	import { CANONICAL_URL } from '~/lib/constants';

	const title = 'How the Show Works';

	useHead({
		title,
	});

	useSeoMeta({
		ogTitle: title,
		ogUrl: `${CANONICAL_URL}/how-the-show-works`,
	});

	// Use Intersection API to render "Back To Top" button
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

	const viewport = useViewport();
</script>

<template>
	<div class="main-content relative">
		<header>
			<h1>How the Show Works</h1>
		</header>
		<div
			id="intersection"
			ref="intersectPoint" />
		<ShowContent class="lg:col-span-3" />
	</div>
	<SharedBackToTop
		v-if="viewport.isLessThan('lg')"
		:show="showButton" />
</template>
