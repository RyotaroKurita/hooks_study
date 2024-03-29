import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 大文字でないとエラー
import SearchCallback from './component/callbackComponent';
import CheckUseMemo from './component/useMemo';
import CheckEffect from './component/useEffect';
import CheckContext from './component/useContext';;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SearchCallback /> */}
    {/* <CheckUseMemo /> */}
    {/* <CheckEffect /> */}
    <CheckContext />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
