const Product = ({ img, productName }) => {
    return (
        <div className="relative inline-block">
            <img src={img} alt={`${productName}`} />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-1">{productName}</p>
        </div>
    );
};

export default Product;