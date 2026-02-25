import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element />
            {/*         <Route path="/home" element={<Home />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
