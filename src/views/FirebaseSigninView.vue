<template>
  <div class="container">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  flex-direction: column;
}
</style>
<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const adminEmail = "water@126.com"

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      if(data.user.email == adminEmail)
      {
        alert("admin")
        router.push('About')
      }else
      {
        alert("user")
        router.push('/')
      }
      console.log("Firebase Register Successful!", data)
      // router.push("/")
      console.log(auth.currentUser) // To check the current User signed in
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
