import React, {useState} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () =>{
  const [data, setData] = useState(null);
  const onClick = async () => {
    const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=2240b244bccf4a5ba26330614e1840d0').then(response => {
      setData(response.data);
    });
  };
  return (
    <NewsList />
  );
};

export default App;