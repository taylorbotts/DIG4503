import Navigation from './index'
import styles from './styles.module.css'

class TypeSearch extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      searchResult: []
    }
  }

  setResults (result) {
    this.setState({searchResult: result})
  }

  readType = (event) => {

    event.preventDefault()

    let input = document.querySelector('#id')
    let reportingArea = document.querySelector('#reportingArea')

    fetch('http://localhost:3000/api/pokemon/type/' + input.value)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((result) => {

        this.setResults(result)

      }).catch(function (error) {
        console.log(error)
      })

    input.value = ''
  }

  render() {
    return (
      <>
        <Navigation />
        <form onSubmit={this.readType} className={styles.search}>
          <label htmlFor="id" className={styles.label}>Search By Type: </label>
          <input type="text" id="id" className={styles.input}/>
          <button type="submit" className={styles.submit}>Submit</button>
        </form>
        <hr />
        <div id="reportingArea" className={styles.reporting}>
          {this.state.searchResult.error ? this.state.searchResult.error :
            this.state.searchResult
              .map((p) => <div key={p.id} className={styles.pokemon}>
              {p.name}
            </div>)}
        </div>
      </>
    )
  }
}

export default TypeSearch