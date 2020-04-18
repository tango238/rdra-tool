import React from 'react'
import { Alert } from 'src/components/Alert'
import { Button } from 'src/components/Button'
import { Input } from 'src/components/FormInput'
import { FormInput } from 'src/components/ReduxInput'
import styled from 'styled-components'
import { useActions } from 'typeless'
import { SignupFormActions, SignupFormProvider } from '../signup-form'
import { getSignupState } from '../interface'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  ${Input} {
    margin-bottom: 20px;
  }
`

const Form = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: 400;
  text-align: center;
`

const Info = styled.div`
  text-align: center;
  margin-top: 20px;
`

interface ViewProps {}

export default ((props: ViewProps) => {
  const { submit } = useActions(SignupFormActions)
  const { isLoading, error } = getSignupState.useState()

  return (
    <Wrapper>
      <SignupFormProvider>
        <Form
          onSubmit={e => {
            e.preventDefault()
            submit()
          }}
        >
          {error && <Alert>{error}</Alert>}
          <FormInput name="email" label="Email"/>
          <FormInput name="password" label="Password" type="password"/>
          <Button large block loading={isLoading}>
            アカウントを作成する
          </Button>
        </Form>
      </SignupFormProvider>
    </Wrapper>
  )
}) as React.FC<ViewProps>
