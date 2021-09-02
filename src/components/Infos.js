import "../styles/Infos.css";

function Infos(props) {
    return (
        <div className="card">
            <div className="img">
                <img src={props.image} alt="" />
            </div>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Infos;