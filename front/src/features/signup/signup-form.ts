import { createForm } from 'typeless-form'
import { SignupFormSymbol } from './symbol'

export interface SignupFormValues {
  email: string
  password: string
}

export const [
  useSignupForm,
  SignupFormActions,
  getSignupFormState,
  SignupFormProvider,
] = createForm<SignupFormValues>({
  symbol: SignupFormSymbol,
  validator: (errors, values) => {
    if (!values.email) {
      errors.email = 'Please enter Email!'
    }
    if (!values.password) {
      errors.password = 'Please enter Password!'
    }
  },
})
