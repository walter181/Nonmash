<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive variables to hold book information (ISBN and name)
const isbn = ref('');
const name = ref('');

// Function to add a new book by sending a POST request
const addBook = async () => {
  try {
    // Send a POST request with book details (ISBN and name)
    const response = await axios.post('https://addbooks-46kplcjz2a-uc.a.run.app', {
      isbn: isbn.value,  // Access the value of the ref object
      name: name.value
    });

    // Notify the user of success
    alert('Add book succeeded');
    console.log('Response:', response.data);
    isbn.value = '';
    name.value = '';

  } catch (error) {
    // Log and notify the user of any error
    console.error('Error adding book:', error);
    alert('Failed to add book');
  }
};

</script>
