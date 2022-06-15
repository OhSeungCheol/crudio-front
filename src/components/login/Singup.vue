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
        :type="'password'"
        label="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="name"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I'm not robot"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid && !checkbox"
        color="success"
        class="mr-4"
        @click="signup"
      >
        sign up
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      checkbox: false,
    }),

    methods: {
      signup () {
        if(this.id == '' || this.password == '' || this.name == '' || this.checkbox == false){
          alert('Check input');
          return;
        }

        let isSingUp = false;

        // TODO : 회원 가입 API 호출

        isSingUp = true; // 무조건 성공 (임시)

        if(isSingUp == true){
          alert('successful signup');
          location.href="/login";
        } else {
          alert('fail signup');
        }
      },
    },
  }
</script>