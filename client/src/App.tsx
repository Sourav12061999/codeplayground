import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorPage from './pages/editor';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/editor/:id' element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
