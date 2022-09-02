import React from "react";
import { Product } from "../../types";
import "./other-products.css";

const OtherProducts = () => {
  const products: Product[] = [
    {
      heading: "Privacy Policy Generator",
      body: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      imageUrl: "images/privacy-policy-generator.png",
    },
    {
      heading: "Terms & Conditions Generator",
      body: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      imageUrl: "images/terms-and-conditions-generator.png",
    },
    {
      heading: "Domain Name Generator",
      body: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      imageUrl: "images/domain-name-generator.png",
    },
    {
      heading: "Invoice Generator",
      body: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      imageUrl: "images/invoice-generator.png",
    },
  ];
  return (
    <div className="product__container">
      {products.map((product, index) => (
        <div className="product__item" key={index}>
          <img src={product.imageUrl} alt={`${product.heading}`} />
          <h2>{product.heading}</h2>
          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
};

export default OtherProducts;
