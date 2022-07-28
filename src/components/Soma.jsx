import Card from './Card'
import { connect } from 'react-redux'

const Soma = (props) => {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Soma)
