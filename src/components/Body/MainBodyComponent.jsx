import FormComponent from "./Form/Form";
import PresentationComponent from "./Presentation/Presentation";
import ResultsComponent from "./Results/Results";

function MainComponent() {
    return (<div className="body-container">
        {/* <FormComponent/> */}
        <PresentationComponent />
        <ResultsComponent/>
    </div>  );
}

export default MainComponent;