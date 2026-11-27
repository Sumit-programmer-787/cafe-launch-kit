const cafeData = {
  cafe: {
    name: "The Chai Corner",
    tagline: "Freshly made, happily served.",
    address: "Gaya, Bihar, India",
    currency: "INR",
    primaryColor: "#8B4513",
    secondaryColor: "#F5E6D3",
  },

menu: [
    {
      id: 1,
      name: "Masala Chai",
      category: "Beverages",
      price: 20,
      available: true,
      prepQuantity: 40,
    },
    {
      id: 2,
      name: "Cold Coffee",
      category: "Beverages",
      price: 50,
      available: true,
      prepQuantity: 20,
    },
    {
      id: 3,
      name: "Veg Momos",
      category: "Snacks",
      price: 60,
      available: true,
      prepQuantity: 30,
    },
    {
      id: 4,
      name: "Masala Maggi",
      category: "Snacks",
      price: 40,
      available: false,
      prepQuantity: 0,
    },
    {
      id: 5,
      name: "Veg Burger",
      category: "Fast Food",
      price: 70,
      available: true,
      prepQuantity: 15,
    },
  ],
};

export default cafeData;
