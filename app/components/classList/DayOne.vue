<script setup lang="ts">
import { API_URL } from '~/constants';
import type { Division } from '~/types/class-list.index';
const { data, pending, error } = await useFetch<Division[]>(`${API_URL}/db_day1.json`, {
  server: false,
})
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error loading data</div>
  <div v-else>
    <!-- display data -->
  </div>
</template>