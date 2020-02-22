import React from 'react';
import IdSearch from './Components/IdSearch'
import NameSearch from './Components/NameSearch'
import ReportingArea from './Components/ReportingArea'

class App extends React.Component {
  render() {
    return (
      <div>
        <IdSearch />
        <NameSearch />
        <ReportingArea />
      </div>
    )
  }
}

export default App;