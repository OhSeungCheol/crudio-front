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
    >
      <v-text-field
        v-model="id"
        :counter="10"
        :rules="idRules"
        label="id"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="10"
        :type="show4 ? 'text' : 'password'"
        label="password"
        required
      ></v-text-field>

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
  import store from '../../store'
  export default {
    data: () => ({
      valid: true,
      id: '',
      password: '',
    }),

    methods: {
      signin () {
        let login = false;
        if(this.id != '' && this.password != ''){
          // TODO
          // Call SignInAPI
  
          // if successfull authentication, change login to 'true'
          login = true;
        }

        if(login){
          // alert(store.getters.isLogined) -> false
          store.commit('login');
          // alert(store.getters.isLogined) -> true

          alert('Login Successful');
        } else {
          alert('Login Fail');
        }
      }
    },
  }
</script>