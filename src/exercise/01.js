// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import PropTypes from 'prop-types';

function Greeting({initialName}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

Greeting.defaultProps = {
  initialName: '',
};

Greeting.propTypes = {
  initialName: PropTypes.string,
};

function App() {
  return <Greeting initialName="your name here" />
}

export default App
