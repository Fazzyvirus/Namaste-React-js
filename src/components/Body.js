import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filer">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
