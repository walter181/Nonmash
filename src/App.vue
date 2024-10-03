<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Import the router hook to get the current route
import BHeader from './components/BHeader.vue';

// Use `useRoute` to access the current route
const route = useRoute();

// Computed property to determine whether to show the header
const showHeader = computed(() => route.name !== 'CountBookAPI');
</script>
