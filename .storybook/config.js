import React from 'react'
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info'

setAddon(infoAddon)

function loadStories() {
  require('../src/Display/stories')
  require('../src/Fields/stories')
}

configure(loadStories, module);
