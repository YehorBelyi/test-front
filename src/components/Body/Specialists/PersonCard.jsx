function PersonComponent({name, desc, photo}) {
    return (<div className="box">
        <div className="image-cont">
            <img src="1.jpg" alt="Описание" />
        </div>
        <div className="content">
            <p className="name">Джон Смит</p>
            <p className="description">Разработчик фронтенда</p>
        </div>
        <div className="icon-row">
            <div className="icon"><i className="fas fa-heart"></i></div>
            <div className="icon"><i className="fas fa-star"></i></div>
            <div className="icon"><i className="fas fa-comment"></i></div>
            <div className="icon"><i className="fas fa-share"></i></div>
        </div>
    </div>);
}

export default PersonComponent;