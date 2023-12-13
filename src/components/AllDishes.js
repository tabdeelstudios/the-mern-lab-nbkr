import IndividualDish from './IndividualDish';

const AllDishes = ({ menu }) => {
    console.log(menu);
    return (
        <div id="dishes">
            {menu && menu.map((dish) => (
                <IndividualDish name={dish.title} price={dish.price} content={dish.desc} />
            ))}
        </div>
    );
}

export default AllDishes;