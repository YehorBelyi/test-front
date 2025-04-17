import FormComponent from "./Form/Form";
import PresentationComponent from "./Presentation/Presentation";
import ResultsComponent from "./Results/Results";

function MainComponent() {
    return (<div className="body-container">
        <PresentationComponent />
        <ResultsComponent />
        <FormComponent/>
    </div>  );
}

export default MainComponent;