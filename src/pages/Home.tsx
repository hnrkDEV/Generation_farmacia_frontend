import ListaCategorias from "../components/categoria/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem vindo ao FarmaGen</h2>

            <p className="text-xl">
              Onde a saúde e o bem-estar são prioridades!
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="medics.svg"
              alt="Imagem Página Home"
              style={{
                width: "66%",
              }}
            />
          </div>
        </div>
      </div>
      <ListaCategorias />
    </>
  );
}

export default Home;
