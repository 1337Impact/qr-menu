import Link from "next/link";
import React from "react";
import { FaUtensils } from "react-icons/fa";

const CategoryCard: React.FC<any> = ({ id, name, description, image }) => {
  return (
    <Link href={`/category/${name}`}>
      <div className="rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <div className="relative h-32">
          <img
            alt={name}
            className="w-full h-32 object-cover"
            height="200"
            src={image}
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="bg-white p-5 shadow-md flex items-start">
          <div className="text-primary-500 text-2xl mr-3">
            <FaUtensils />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
