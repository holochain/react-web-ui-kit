
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ExampleComponent, { StateProps, DispatchProps } from '../components/exampleComponent'

import { State } from '../reducers/reducer'
import { ExampleHolochainAction } from '../actions/actions'

const mapStateToProps = (state: State): StateProps => {
  return {
    ownStatus: state.status
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    takeAction: ExampleHolochainAction.create
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent)
