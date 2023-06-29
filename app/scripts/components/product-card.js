import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productImgDiv">
        <img className={"productImg"} src={product.picture} alt="" />
      </div>
      <br />
      <p className="productName">{product.name}</p>
      <p className="productPrice">${product.price}</p>
      <br />
      <p className="productDesc">{product.about}</p>
      <div className="productTags">
        {product.tags.map((tag, index) => (
          <div className="productTag" key={`product${product._id}tag${index}`}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
