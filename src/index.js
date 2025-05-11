// 必要なモジュール、ファイルなどを読み込むためのもの
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App color = 'red' title = 'URAWA REDS' message = 'これはレッドを適用した際の表示です' />
  </React.StrictMode>
)






// // Reactに用意されている仮想DOMを扱うため用意されている
// // 引数に指定した「id=root」というエレメントをルートとするReactDOMオブジェクトを作成
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // 仮想DOMの内容をレンダリングし、実際のDOMに反映
// // 「厳格モードでAppコンポーネントをレンダリングして表示する」作業
// root.render(
//   // この<React.〜>の部分がJSX
//   // React.StrictMode は「コードの実行をより厳格に制御するためのもの」
//   <React.StrictMode> 
//     <App title = "Hello,World!" message = "これはcolor=redの表示です。" color = "blue"/> 
//     {/* /* Appタグにtitleとmessageという属性を用意 */}
//   </React.StrictMode>
// )



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
