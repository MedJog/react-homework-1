import React from 'react';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Сообщения</h1>
      <Message text="Привет, это сообщение!" />
      <Message text="Другой текст сообщения." />
      <Message text="Новый текст сообщения." />
    </div>
  );
}

export default App;
