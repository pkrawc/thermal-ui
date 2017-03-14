import React from 'react'
import { RadioField } from '../Radio'

function RadioExample(props) {
  return (
    <RadioField name="some name" values={[
      {
        title: 'a question worth asking',
        values: ['option 1', 'option 2']
      }
    ]}/>
  )
}

export default {
  title: 'Radio Field',
  example: RadioExample
}
