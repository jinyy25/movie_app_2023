import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Movie from "./Movie";

//react DOM 생성 하는 영역 => root 을 불러오는 renderting
const root = ReactDOM.createRoot(document.getElementById('root'));

//Strict Mode App 실행
//jsx : componenet 를 사용해서 HTML 처럼 작성
root.render(
  <React.StrictMode>
    <App />
    {/* <Movie /> */}
  </React.StrictMode>
);
