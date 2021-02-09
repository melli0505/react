import React, {useState, useCallback} from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () =>{
  // category 초기 설정(사용x)
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  
  return (
    <Route path="/:category?" component={NewsPage}></Route> // ? : category 값은 선택적이라는 뜻
  );
};

export default App;