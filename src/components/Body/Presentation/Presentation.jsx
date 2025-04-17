import "./Presentation.css"
import first_photo from "./assets/1.png"

function PresentationComponent() {
    return (<section class="hero">
        <div class="container">
            <h1 class="hero-title">Ваша підтримка поруч!</h1>
            <p className="hero-text">Онлайн-платформа надає українцям безкоштовну психологічну допомогу. Якщо ви відчуваєте тривогу, у вас трапляються панічні атаки, ви близькі до депресії чи навіть на межі – залиште заявку та очікуйте. Спеціаліст зв’яжеться з вами якомога швидше.</p>
            <button type="button" class="hero-btn">Запросити допомогу</button>
        </div>
    </section>);
}

export default PresentationComponent;