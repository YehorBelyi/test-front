function PersonComponent({name, desc, photo}) {
    return (<div className="box">
        <div className="image-cont">
            <img src={photo} alt="Описание" />
        </div>
        <div className="content">
            <p className="name">{name}</p>
            <p className="description">{desc}</p>
        </div>
    </div>);
}

export default PersonComponent;