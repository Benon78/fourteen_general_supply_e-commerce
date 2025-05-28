import { all_products } from "../../assets/data";

export const getFilteredProduct = (category) => {
    if(!category || category === 'all products'){
        return all_products
    }
  return all_products.filter((item) => {
    // Handle special categories
    if (item.category === "New Laptops" || item.category === "Refurbished Laptops") {
      const itemCategory = item.category.split(' ').pop(); // gets 'Laptops'
      return category.toLowerCase() === itemCategory.toLowerCase();
    }

    // Default case
    return item.category.toLowerCase().includes(category.toLowerCase());
  });
};

export const getProduct = (id) =>{
  return all_products.find((item)=> item.id === Number(id));
}