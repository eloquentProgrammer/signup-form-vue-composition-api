import { ref, reactive } from '@vue/composition-api'

export const useSignUp = () => {
  const user = reactive({
    username: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    age: null
  })

  // Our refs
  const form = ref(null)

  // Our methods
  function cleanForm () {
    form.value.reset()
  }

  function signUp () {
    console.log('Success')
    // signup form logic here...
  }
  
  return {
    signUp,
    cleanForm,
    form,
    user
  }
}