import React from 'react'
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info'
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Thermal UI',
  url: 'https://thermal-ui.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

setAddon(infoAddon)

function loadStories() {
  require('../Display/stories')
  require('../Fields/stories')
  require('../General/stories')
  require('../Layout/stories')
  require('../Typography/stories')
}

configure(loadStories, module);
