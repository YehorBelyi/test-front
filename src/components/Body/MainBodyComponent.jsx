import FormComponent from "./Form/Form";
import PresentationComponent from "./Presentation/Presentation";

function MainComponent() {
    return (<div className="body-container">
        <FormComponent/>
        <PresentationComponent />
        
    </div>  );
}

export default MainComponent;