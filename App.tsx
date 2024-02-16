import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// For FORM VALIDATION
import * as yup from 'yup'

const App = () => {

  // Creating schema for form validation
  const passwordSchema = yup.object().shape({
    passwordLength:yup.number().min(8,'Should contain minimum 8 characters').required('Length is required')
  })

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})