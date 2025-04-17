import FooterComponent from "./Footer/Footer";
import FormComponent from "./Form/Form";
import PresentationComponent from "./Presentation/Presentation";
import QuestionsComponent from "./Questions/Questions";
import ResultsComponent from "./Results/Results";
import SpecialistsComponent from "./Specialists/Specialists";

function MainComponent() {
    return (<div className="body-container">
        <PresentationComponent />
        <ResultsComponent />
        <FormComponent />
        <SpecialistsComponent/>
        <QuestionsComponent/>
    </div>  );
}

export default MainComponent;