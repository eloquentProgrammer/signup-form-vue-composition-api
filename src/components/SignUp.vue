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
          @click="signUp"
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
import { useRules } from '../composition-functions/useRules'
import { useSignUp } from '../composition-functions/useSignUp'

export default {
  name: "SignUp",
  setup () {
    const { form, cleanForm, signUp, user } = useSignUp()
    const { valid, rules } = useRules(user)

    // We will expose all the options that we need in our template
    return {
      form,
      valid,
      rules,
      user,
      cleanForm,
      signUp
    }
  }
};
</script>
