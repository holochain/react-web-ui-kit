import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'
// import { withNotes } from '@storybook/addon-notes'
import ExampleComponent from './exampleComponent'
import { autoCompleteProfileFieldTests } from './exampleComponent.test'

storiesOf('ExampleComponent', module)
  .add('Autocomplete Profile Field', () => {
    specs(() => autoCompleteProfileFieldTests)
    return (<ExampleComponent ownStatus='ready'/>)
  })
