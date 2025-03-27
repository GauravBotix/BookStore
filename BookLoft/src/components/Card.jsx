import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="w-full px-3">
      <div className="card  shadow-xl hover:scale-101 duration-300 dark:bg-slate-900 dark:text-white dark:border p-4">
        <figure>
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

