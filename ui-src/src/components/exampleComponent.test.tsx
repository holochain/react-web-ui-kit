import * as React from 'react'
import AutoCompleteProfileField, { State, Props } from './exampleComponent'
import { mount, ReactWrapper, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
// import { Suggestion as SuggestionType } from '../../types/suggestion'

configure({ adapter: new Adapter() })

export const autoCompleteProfileFieldTests = describe('Auto selecting Persona values to create a Profile Mapping', () => {

  let props: Props
  let mountedExampleComponent: ReactWrapper<Props, State> | undefined

  const exampleComponent = () => {
    if (!mountedExampleComponent) {
      mountedExampleComponent = mount(<AutoCompleteProfileField {...props}/>)
    }
    return mountedExampleComponent
  }

  beforeEach(() => {
    mountedExampleComponent = undefined
  })

  it('Can do the thing we want it do do', () => {
    exampleComponent().simulate('click')
    expect(true)
  })
})
