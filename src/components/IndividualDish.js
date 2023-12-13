const IndividualDish = ({ name, price, content }) => {
    return (
        <div className="dish">
            <img className="dishImage" />
            <div>
                <div className="inner">
                    <h2 className="dishName">{name}</h2>
                    <h2 className="dishPrice">{price}</h2>
                </div>
                <hr />
                <p className="dishContent">{content}</p>
            </div>
        </div>
    );
}

export default IndividualDish;