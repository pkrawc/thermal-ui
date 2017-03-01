import React, { Component } from 'react'
import { Input } from '../Input'
import { Button } from '../../index'
import { colors } from 'variables'

class InputExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    return (
      <div>
        <Input
          id="example"
          type="text"
          label="Tenants Name"
          placeholder="Janet Wood"
          error={this.state.error}
          errorText="oh shit, you fucked up"
        />
        <Button onClick={() => {
          this.setState({error: !this.state.error})
        }}>toggle error</Button>
      </div>
    )
  }
}

export default {
  title: 'Input',
  example: InputExample
}
