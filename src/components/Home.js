import '../styles/Home.css';
import Infos from './Infos';
import NavBar from './NavBar';
function Home() {
    const data = [
        {
            key: 1,
            title: "Cargo",
            description: "Consultor de RH",
            image: "./img/Grupo 62.png",
        },
        {
            key: 2,
            title: "Bônus PPR",
            description: "2,4 salários por ano",
            image: "./img/726532.png",
        },
        {
            key: 3,
            title: "Início",
            description: "12/05/2021",
            image: "./img/Caminho 399.png",
        },
        {
            key: 4,
            title: "Localização",
            description: "Escritório VIVO São Paulo",
            image: "./img/Caminho 395.png",
        },
        {
            key: 5,
            title: "Salário",
            description: "R$10.000,00",
            image: "./img/Caminho 394.png",
        },
    ]

    return (
        <div>
            <div className="container">
                <div className="header">
                    <h1>Proposta</h1>
                    <img src="./img/Page-1.png" alt="" />
                </div>

                <div className="pessoa">
                    <img src="./img/Retângulo 110.png" alt="" />
                    <h2>Bruna da Silva Santos</h2>
                </div>

                <div className="infos">
                    {data.map((element) => (<Infos key={element.key} title={element.title} description={element.description} image={element.image} />))}
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Home;