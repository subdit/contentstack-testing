import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { stack } from './sdk/contentstack_module';

const getEntry = () => {
  return stack.ContentType('page').Entry('blta11f7b548b8605de').fetch();
};

function App() {
  // const [entry, setEntry] = useState();

  useEffect(() => {
    getEntry().then(res => {
      console.log(res, 'test');
    });
    // setEntry(entry);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
