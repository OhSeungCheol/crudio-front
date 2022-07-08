<template>
  <v-card
        elevation="3"
        outlined
        shaped
        style="margin-top:40px"
    >
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      style="margin:40px"
      id="loginForm"
      method="post"
    >
      <v-text-field
        v-model="id"
        :counter="10"
        :rules="idRules"
        label="id"
        id="username"
        name="username"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="10"
        :type="'password'"
        label="password"
        id="password"
        name="password"
        required
      ></v-text-field>

      <p style="color:red; font-size:20pt;">
        <center>
          {{$route.query.message}}
        </center>
      </p>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="signin"
      >
        sign in
      </v-btn>

      <v-btn
        color="warning"
        to="singup"
      >
        Sing up
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  import store from '../../store';
  import { doLogin } from '../../api';

  export default {
    data: () => ({
      valid: true,
      id: '',
      idRules: [
        v => !!v || 'ID is required',
        v => (v && v.length >= 4) || 'ID must be more than 4 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 4) || 'Password must be more than 4 length',
      ],
    }),

    methods: {
      signin () {
        if(this.id != '' && this.password != ''){


          const form = document.getElementById('loginForm');
          doLogin(form)
          .then((response) => { 
            console.log(response.data);
            // alert(store.getters.isLogined) -> false
            store.commit('login');
            // alert(store.getters.isLogined) -> true

            alert('Login Successful');
          }).catch(function(error) {
            console.log(error);
            alert('Login Fail');
          });
        }
      }
    },
  }
</script>