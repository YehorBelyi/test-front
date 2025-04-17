import ResultCardComponent from "./ResultCard";
import "./Results.css"

import first_image from "./assets/1.png"
import second_image from "./assets/2.png"
import third_image from "./assets/3.png"

function ResultsComponent() {
    return (<div className="results-container">
        <div className="results-header">
            <h1>Наші результати</h1>
        </div>
        <div className="results-allcards">
            <ResultCardComponent image={first_image} number="1085" text="Кількість психотерапевтів" />
            <ResultCardComponent image={second_image} number="49 912" text="Кількість оброблених заявок" />
            <ResultCardComponent image={third_image} number="83 824" text="Кількість годин консультацій" />
        </div>
    </div>);
}

export default ResultsComponent;