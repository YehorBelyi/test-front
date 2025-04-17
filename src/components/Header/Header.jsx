import "./Header.css";

function HeaderComponent() {
    return (
        <div className="header-container">
            <div className="composed-container">
                <div className="header-logo"><span className="text-logo">SAFE</span>Zone</div>
                {/* <div className="links">
                    <a href="/" className="pagelink">Studio</a>
                    <a href="/new_test" className="pagelink">Portfolio</a>
                    <a href="/contacts" className="pagelink">Contacts</a>
                </div> */}
            </div>
            <div className="zone-info">
                <p>info@devstudio.com</p>
                <p>+11 (000) 111-11-11</p>
            </div>
        </div>
    );
}

export default HeaderComponent;