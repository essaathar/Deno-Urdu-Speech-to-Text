import './App.css'
// import FileUploader from './components/uploader.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
      {/* <FileUploader /> */}
    </>
  )
}

export default App
