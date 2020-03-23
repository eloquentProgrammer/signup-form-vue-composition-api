<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model="user.username"
          :rules="rules.username"
          label="User name"
        />

        <v-text-field
          v-model="user.displayName"
          :rules="rules.displayName"
          label="Display name"
        />
        
        <v-text-field
          v-model="user.age"
          :rules="rules.age"
          label="Age"
          type="number"
        />

        <v-text-field
          v-model="user.password"
          :rules="rules.password"
          label="Password"
        />

        <v-text-field
          v-model="user.confirmPassword"
          :rules="rules.confirmPassword"
          label="Confirm password"
        />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="SignUp"
        >
          Sign up
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="cleanForm"
        >
          Clean Form
        </v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUp",
  data: vm => ({
    valid: false,
    user: {
      username: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      age: null,
      
    },
    rules: {
      username: [value => vm.isRequired(value, 'Username')],
      displayName: [
        value => vm.isRequired(value, 'Display name'),
        value => (value || '').length > 3 || 'Display name must be atleast 3 characters long'
      ],
      password: [
        value => vm.isRequired(value, 'Password'),
        value => (value || '').length > 5 || 'Password must be atleast 6 characters long'
      ],
      confirmPassword: [value => vm.user.password === value || "Passwords don't match"],
      age: [age => age >= 18 || 'You must be at least 18 years old to Sign Up']
    }
  }),
  methods: {
    cleanForm () {
      this.$refs.form.reset()
    },
    SignUp () {
      // signup form logic here...
    },
    isRequired (value, fieldName) {
      return !!((value || '').trim()).length || `${fieldName} is required`
    }
  }
};
</script>
