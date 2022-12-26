import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from './components/TodoList';
import EmptyPage from './components/EmptyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />

          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
