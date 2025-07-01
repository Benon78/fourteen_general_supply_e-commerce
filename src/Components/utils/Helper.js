import { all_products } from "../../assets/data";
import { useEffect } from "react";

export const getFilteredProduct = async(category) => {
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

export const getRelatedProduct = (id) => {
  const product = getProduct(id)
  return all_products.filter((item) => item.category === product.category);
}

export const usePageTittle = (title) => {
          const titleUpper = title.split('')[0].toUpperCase() + title.split('').slice(1).join('')
                
        useEffect(()=>{
          document.title = titleUpper;
        },[title])
}