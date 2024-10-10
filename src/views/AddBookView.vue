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
    <p v-if="message">{{ message }}</p> <!-- Display success or error message -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive variables for book information and messages
const isbn = ref('');
const name = ref('');
const message = ref('');

// Function to add a new book by sending a POST request
const addBook = async () => {
  try {
    // Send a POST request with book details (ISBN and name)
    const response = await axios.post('https://addbooks-46kplcjz2a-uc.a.run.app/addbook', {
      isbn: isbn.value,
      name: name.value
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Notify the user of success and clear the form
    message.value = 'Book added successfully!';
    isbn.value = '';
    name.value = '';
    console.log('Response:', response.data);

  } catch (error) {
    // Log the error and notify the user
    console.error('Error adding book:', error);
    if (error.response && error.response.data) {
      // Show server error message if available
      message.value = `Failed to add book: ${error.response.data.message}`;
    } else {
      // Fallback error message
      message.value = 'Failed to add book. Please try again later.';
    }
  }
};
</script>
