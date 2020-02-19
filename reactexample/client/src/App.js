import React from 'react';
import IdSearch from './components/IdSearch'
import NameSearch from './components/NameSearch'
import ReportingArea from './components/ReportingArea'

class App extends React.Component {
  render () {
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
