import { legacy_createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: numerosReducer,
})

function storeConfig() {
    return legacy_createStore(reducers)
}

export default storeConfig
