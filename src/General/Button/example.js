import React from 'react'
import { Button } from '../Button'
import { colors } from 'variables'

const ButtonExample = props =>
  <Button primary color={colors.primary} onClick={() => { console.log('button click')}}>
    Hello Button
  </Button>

export default {
  title: 'Button',
  example: ButtonExample
}
