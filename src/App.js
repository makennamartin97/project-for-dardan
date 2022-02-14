import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './components/Loading';
import Main from './components/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2150);
      })
  return (
    <div className="App">
      {isLoading===true?
        <Loading/>:
        <Main path="/"/>
      }
    </div>
  );
}

export default App;
