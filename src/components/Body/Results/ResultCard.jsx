import "./ResultCard.css"

function ResultCardComponent({ image, number, text }) {
    return (<div className="result-card">
        <img src={image} alt={image}></img>
        <h2>{number}</h2>
        <p>{text}   </p>
    </div>);
}

export default ResultCardComponent;