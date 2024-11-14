// Menu.jsx
import React from 'react';

const menuData = {
  Appetizers: [
    { name: "Bruschetta", description: "Grilled bread topped with garlic, tomatoes, and basil.", price: "$5" },
    { name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese and herbs.", price: "$7" },
  ],
  "Main Courses": [
    { name: "Grilled Chicken", description: "Seasoned grilled chicken with vegetables.", price: "$12" },
    { name: "Vegetarian Lasagna", description: "Lasagna layered with vegetables and cheese.", price: "$10" },
  ],
  Desserts: [
    { name: "Cheesecake", description: "Classic creamy cheesecake.", price: "$6" },
    { name: "Chocolate Mousse", description: "Rich chocolate mousse with whipped cream.", price: "$6" },
  ]
};

const Menu = () => {
  return (
    <div className="flex flex-col items-center px-8 py-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-primaryGreen mb-8">Our Menu</h2>
      {Object.keys(menuData).map((category, index) => (
        <div key={index} className="w-full max-w-4xl mb-12">
          <h3 className="text-2xl font-semibold text-darkGray mb-4">{category}</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {menuData[category].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-darkGray mb-2">{item.name}</h4>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-accentGold font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
