import Card from './Card'
import { connect } from 'react-redux'

const Media = (props) => {
    const { min, max } = props
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media)
