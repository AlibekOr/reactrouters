import React from 'react';
import TodoApp from './components/redux/TodoApp';
import { Route, Routes, BrowserRouter as Routers } from "react-router-dom"
const App = () => {

  return (
    <Routers>
      <Routes>
        <Route path='/' element={<TodoApp />} />
      </Routes>
    </Routers>
  );
};

export default App;