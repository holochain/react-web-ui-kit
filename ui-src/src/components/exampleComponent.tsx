import * as React from 'react'
import { StyleRulesCallback } from '@material-ui/core/'
import { withStyles, Theme } from '@material-ui/core/styles'

const styles: StyleRulesCallback = (theme: Theme) => ({

})

export interface OwnProps {
// These are props the component receives from its parent
// e.g. what you write in <ExampleComponent ...>
}

export interface StateProps {
// Props that are set by mapStateToProps
  ownStatus: string
}

export interface DispatchProps {
// Props that are set by mapDispatchToProps
  takeAction: Function
}

export type Props = OwnProps & StateProps

export interface State {
// The components optional internal state
}

class ExampleComponent extends React.Component<Props, State> {
  render () {
    return (
      <div/>
    )
  }
}

export default withStyles(styles)(ExampleComponent)
