import React from 'react'
import { Button } from '../Button'
import { colors } from 'variables'

export default {
  title: 'Button',
  examples: [
    (
      <Button>Hello World</Button>
    ),
    (
      <Button color={`#DD0000`}>Hello Color</Button>
    ),
    (
      <Button primary color={colors.primary}>Hello Primary</Button>
    )
  ]
}
