<template>
  <div>
    <h1>Edit Book</h1>
    <form @submit.prevent="editBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Edit Book</button>
      <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';

const isbn = ref('');
const name = ref('');
const message = ref('');

const editBook = async () => {
  if (!isbn.value.trim()) {
    message.value = 'ISBN is required.';
    return;
  }
  const booksCollection = collection(db, 'books');
  const q = query(booksCollection, where('isbn', '==', isbn.value.trim()));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    message.value = 'No book found with this ISBN.';
    return;
  }

  const bookDoc = querySnapshot.docs[0];

  try {
    await updateDoc(bookDoc.ref, {
      name: name.value.trim()
    });
    message.value = 'Book updated successfully.';
    isbn.value = '';
    name.value = '';
  } catch (error) {
    console.error('Error updating book:', error);
    message.value = 'Failed to update the book.';
  }
};
</script>