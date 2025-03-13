import x_icon from "../assets/icons/xmark.png";

const ExpandedDrinkModal = ({ drink, onClose }) => {
  if (!drink) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose} // Closes modal when clicking outside
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Close Button */}
        <button className="absolute top-4 right-6" onClick={onClose}>
          <img src={x_icon} className="w-8" />
        </button>

        {/* Drink Image */}
        <img
          src={drink.image}
          alt={drink.name}
          className="w-60 h-60 rounded-lg object-cover mx-auto"
        />

        {/* Drink Name */}
        <h2 className="text-2xl font-fredoka font-bold text-medium-pink mt-4">
          {drink.name}
        </h2>

        {/* Drink Description */}
        <p className="text-md font-montserrat text-dark-purple mt-2">
          {drink.description}
        </p>
      </div>
    </div>
  );
};

export default ExpandedDrinkModal;
