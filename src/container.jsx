function SectionHeading(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.heading}</h2>
        <p className="text-gray-600 text-sm mb-4">{props.para}</p>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-indigo-700 mr-2">{props.discount}</span>
          <span className="text-sm text-gray-500 line-through">{props.amount}</span>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default SectionHeading;