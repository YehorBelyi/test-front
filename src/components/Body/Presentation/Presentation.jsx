import "./Presentation.css"
import first_photo from"./assets/1.png"

function PresentationComponent() {
    return (<div className="presentation-container">
        <div className="presentation-info">
            <h2>SAFEZONE - психотерапія онлайн</h2>
            <h2>Знайди саме свого психотерапевта</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
            <input type="button" value="Знайти саме свого психотерапевта" />
        </div>
        <div className="presentation-image">
            <img src={first_photo} alt="photo1.png"></img>
        </div>
    </div>);
}

export default PresentationComponent;