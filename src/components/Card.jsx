const Card = ({ img, boxes }) => {
  return (
    <div className="max-w-sm p-3 bg-gray-700 border border-black rounded-lg shadow flex flex-col items-center">
      <img src={img} alt="" className="m-2" />
    </div>
  );
};

export default Card;
