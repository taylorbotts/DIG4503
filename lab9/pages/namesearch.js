import Navigation from './index'
import styles from './styles.module.css'

class NameSearch extends React.Component {

  readName = (event) => {

    event.preventDefault()

    let input = document.querySelector('#id')
    let reportingArea = document.querySelector('#reportingArea')

    fetch('http://localhost:3000/api/pokemon/name/' + input.value)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((result) => {

        reportingArea.innerHTML = result.error ? result.error : result[0].name

      }).catch(function (error) {
        console.log(error)
      })

    input.value = ''
  }

  render() {
    return (
      <>
        <Navigation />
        <form onSubmit={this.readName} className={styles.search}>
          <label htmlFor="id" className={styles.label}>Search By Name: </label>
          <input type="text" id="id" className={styles.input} />
          <button type="submit" className={styles.submit}>Submit</button>
        </form>
        <hr />
        <div id="reportingArea" className={styles.reporting}>
        </div>
      </>
    )
  }
}

export default NameSearch