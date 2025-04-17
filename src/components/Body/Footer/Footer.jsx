import "./Footer.css"
import image from "./assets/icons.svg"

function FooterComponent() {
    return (<footer className="footer">
        <div className="container footer-container">
            <div className="footer-logo-container">
                <a href="./index.html" className="footer-logo"
                >Safe<span className="footer-logo-studio">Zone</span>
                </a>
                <p className="footer-text section-text">
                    Платформа, створена для психологічної підтримки. З любов'ю до вас ❤️
                </p>
            </div>
            <div className="footer-soc-container">
                <p className="footer-soc-subtitle">Social media</p>
                <ul className="footer-soc-list">
                    <li className="footer-soc-item">
                        <a href="" className="footer-soc-link">
                            <svg width="24" height="24" className="footer-icons">
                                <use href={image + "#icon-instagram"}></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer-soc-item">
                        <a href="" className="footer-soc-link">
                            <svg width="24" height="24" className="footer-icons">
                                <use href={image + "#icon-twitter"}></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer-soc-item">
                        <a href="" className="footer-soc-link">
                            <svg width="24" height="24" className="footer-icons">
                                <use href={image + "#icon-facebook"}></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer-soc-item">
                        <a href="" className="footer-soc-link">
                            <svg width="24" height="24" className="footer-icons">
                                <use href={image + "#icon-linkedin"}></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-subscribe-container">
                <p className="footer-subscribe-subtitle">Підписатись</p>
                <form className="footer-form">
                    <label for="footer-email" className="footer-label">
                        <input
                            type="email"
                            name="footer-email"
                            id="footer-email"
                            placeholder="E-mail"
                            className="footer-input"
                        />
                    </label>
                    <button type="submit" className="footer-btn">
                        <span className="footer-text-this">Підписатись</span>
                        <svg className="footer-icon-send" width="24" height="24">
                            <use href="./images/icons.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </footer>);
}

export default FooterComponent;