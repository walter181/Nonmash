<template>
  <pre>{{ jsondata }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Create reactive data
const jsondata = ref(null);
const error = ref(null);

// Define the method to fetch book data
const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-46kplcjz2a-uc.a.run.app');
    jsondata.value = response.data;  // Assign the response data to jsondata
    error.value = null;  // Clear any previous errors
  } catch (err) {
    console.error('Error fetching book count:', err);
    error.value = err;  // Store error details
    jsondata.value = null;  // Ensure jsondata is null when there's an error
  }
};

// Use onMounted lifecycle hook to call getBookCount when the component is mounted
onMounted(() => {
  getBookCount();
});
</script>
