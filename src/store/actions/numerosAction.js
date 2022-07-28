import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes'

// Action Creator
export function alterarNumeroMin(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero,
    }
}

// Action Creator
export function alterarNumeroMax(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero,
    }
}
