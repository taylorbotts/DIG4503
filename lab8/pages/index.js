import Head from 'next/head'
import IdSearch from '../components/IdSearch'
import NameSearch from '../components/NameSearch'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      "pokemon":""
    }
  }

  setPokemonId = (result) => {
    console.log(result)
    this.setState({"pokemon": result.id})
  }

  setPokemonName = (result) => {
    this.setState({ "pokemon": result.name })
  }

  showPokemon = () => {
    return (
      <div>{this.state.pokemon}</div>
    )
  }

  reportingArea = (result) => {
    <div>
      <hr></hr>
      {result}
    </div>
  }

  render () {
    return (
      <>
        <IdSearch callback={this.setPokemonId}/>
        <NameSearch callback={this.setPokemonName}/>
        {this.showPokemon()}
        {console.log(this.state)}
      </>
    )
  }



}

export default App
