const IndividualDish = () => {
    return (
        <div className="dish">
            <img className="dishImage" />
            <div>
                <div className="inner">
                    <h2 className="dishName">Name of the dish</h2>
                    <h2 className="dishPrice">Price</h2>
                </div>
                <hr />
                <p className="dishContent">This is the dish description</p>
            </div>
        </div>
    );
}

export default IndividualDish;