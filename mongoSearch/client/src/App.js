import React from 'react';

class App extends React.Component {
  
  movieSearch () {

    let inputValue = document.querySelector('#movieInput').value

    if (inputValue === 0) {
      inputValue = '~'
    }

    fetch('http://localhost:80/movies/title/' + inputValue)
    .then((response) => response.json() )
    .then((processed) => {
      console.log(processed)
    })
  }

  render () {
    return (
    <div>
      <input type="text" id="movieInput" onKeyUp={this.movieSearch} />
    </div>
    )
  }
}

export default App;
