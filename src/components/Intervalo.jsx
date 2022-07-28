import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'
import {
    alterarNumeroMin,
    alterarNumeroMax,
} from '../store/actions/numerosAction'

const Intervalo = (props) => {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => props.alterarMin(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => props.alterarMax(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMin(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMin(novoNumero)
            dispatch(action)
        },
        alterarMax(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)
