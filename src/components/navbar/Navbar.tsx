import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Projeto FarmaGen
          </Link>
          <div className="flex gap-4">
            <Link to="/listarCategorias" className="hover:underline">
              Listar Categorias
            </Link>
            <Link to="/cadastrarCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
