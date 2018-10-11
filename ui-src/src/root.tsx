import * as React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ExampleComponent from './components/exampleComponent'

const Root = ({ store }: {store: Store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={ExampleComponent} />
    </Router>
  </Provider>
)

export default Root
