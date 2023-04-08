import { useEffect, useState } from 'react';
import { stack } from './sdk/contentstack_module';
import HomePage from './pages/HomePage';

const getEntry = () => {
  return stack
    .ContentType('home_body')
    .Entry('blt44327395a6ba43c8')
    .toJSON()
    .fetch();
};

function App() {
  const [entry, setEntry] = useState();

  useEffect(() => {
    getEntry()
      .then(res => {
        setEntry(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className='App'>{entry && <HomePage entry={entry} />}</div>;
}

export default App;
