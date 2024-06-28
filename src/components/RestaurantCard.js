import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-200 hover:bg-gray-600 hover:text-white">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
