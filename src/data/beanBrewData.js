
const beanBrewData = {
  cafe: {
    name: "Bean & Brew",
    tagline: "Good coffee. Better moments.",
    address: "Jabalpur, Madhya Pradesh, India",
    currency: "INR",
    primaryColor: "#355C4A",
    secondaryColor: "#E5EBDD",
  },

  menu: [
    {
      id: 1,
      name: "Classic Cappuccino",
      category: "Coffee",
      price: 90,
      available: true,
      prepQuantity: 25,
    },
    {
      id: 2,
      name: "Cold Brew",
      category: "Coffee",
      price: 120,
      available: true,
      prepQuantity: 15,
    },
    {
      id: 3,
      name: "Blueberry Muffin",
      category: "Bakery",
      price: 70,
      available: true,
      prepQuantity: 20,
    },
    {
      id: 4,
      name: "Chocolate Croissant",
      category: "Bakery",
      price: 85,
      available: false,
      prepQuantity: 0,
    },
    {
      id: 5,
      name: "Grilled Sandwich",
      category: "Food",
      price: 110,
      available: true,
      prepQuantity: 12,
    },
  ],
};

export default beanBrewData;
