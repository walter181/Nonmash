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

// 定义响应变量来存储书籍信息（ISBN 和名字）
const isbn = ref('');
const name = ref('');

// 添加书籍的函数，发送 POST 请求
const addBook = async () => {
  try {
    // 使用代理发送 POST 请求
    const response = await axios.post('/api', {
      isbn: isbn.value,
      name: name.value
    });

    // 成功提示
    alert('Add book succeeded');
    console.log('Response:', response.data);

  } catch (error) {
    // 记录和通知用户错误信息
    console.error('Error adding book:', error);
    alert('Failed to add book');
  }
};

</script>
