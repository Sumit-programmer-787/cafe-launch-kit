import cafeData from "./cafeData.js";
import beanBrewData from "./beanBrewData.js";

// Change this value to switch café
const activeCafe = "bean";

const cafes = {
  chai: cafeData,
  bean: beanBrewData,
};

export default cafes[activeCafe];