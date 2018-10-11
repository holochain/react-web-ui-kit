import { ActionType, getType } from 'typesafe-actions'

import * as actions from '../actions/actions'

export type Action = ActionType<typeof actions>

// readonly keyword causes compiler to error if one attempts to mutate the state
export type State = {
  readonly status: string
}

export const initialState: State = {
  status: 'default'
}

export function reducer (state: State = initialState, action: Action) {
  switch (action.type) {
    case(getType(actions.ExampleHolochainAction.success)):
      console.log(action.payload.data)
      return state
    default:
      return state
  }
}
