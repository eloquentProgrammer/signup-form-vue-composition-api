import { ref } from '@vue/composition-api'

export const useRules = (user) => {
  // Our data
  const valid = ref(false)
  const rules = {
    username: [value => isRequired(value, 'Username')],
    displayName: [
      value => isRequired(value, 'Display name'),
      value => (value || '').length > 3 || 'Display name must be atleast 3 characters long'
    ],
    password: [
      value => isRequired(value, 'Password'),
      value => (value || '').length > 5 || 'Password must be atleast 6 characters long'
    ],
    confirmPassword: [value => user.password === value || "Passwords don't match"],
    age: [age => age >= 18 || 'You must be at least 18 years old to Sign Up']
  }

  // Our methods
  function isRequired (value, fieldName) {
    return !!((value || '').trim()).length || `${fieldName} is required`
  }
  
  return {
    valid,
    rules
  }
}