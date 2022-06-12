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
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
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
        v => (v && v.length >= 6) || 'ID must be more than 6 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 length',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>