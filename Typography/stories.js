import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import { colors } from 'variables'
import {
  Headline,
  Hero,
  Small,
  Subtitle,
  Text,
  Title
} from './index'


const story = storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .addWithInfo('Hero', 'Description', () => (
    <Hero>
      The Largest Hero
    </Hero>
  ))
  .addWithInfo('Headline', 'Description', () => (
    <Headline>
      Read All About the Headline
    </Headline>
  ))
  .addWithInfo('Title', '', () => (
    <Title>
      Look Ma, a title.
    </Title>
  ))
  .addWithInfo('Subtitle', '', () => (
    <Subtitle>
      This can have a more text and is usually suplementary
    </Subtitle>
  ))
  .addWithInfo('Text', '', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  ))
  .addWithInfo('Small', '', () => (
    <Small>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Small>
  ))

export default story
