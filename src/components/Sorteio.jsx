import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = (props) => {
    const { min, max } = props
    const sorteio = parseInt(Math.random() * (max - min + 1)) + min
    return (
        <Card title="Número Sorteado" purple>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{sorteio}</strong>
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

export default connect(mapStateToProps)(Sorteio)
