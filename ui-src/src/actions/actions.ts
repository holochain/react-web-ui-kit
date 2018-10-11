
import { createHolochainAsyncAction } from '../utils/holochainAxiosActions'

export const ExampleHolochainAction = createHolochainAsyncAction<string, number>('channel', 'zome', 'fnName')
