import { useLocation } from "react-router-dom";
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
          const pathName = useLocation().pathname
          const titleUpper = title.split('')[0].toUpperCase() + title.split('').slice(1).join('')
          const url = `https://fourteengeneral-supply-shop.netlify.app${pathName}`
                
        useEffect(()=>{
          // Set document title
          document.title = titleUpper;

          // Create or update the canonical link element
          let link = document.querySelector("link[rel='canonical']");
          if(!link){
            link = document.createElement('link');
            link.rel = "canonical";
            document.head.appendChild(link);
          }
          link.href = url
          
          // Optional cleanup: remove the link when component unmounts
          return () => {
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
          };
        },[title,pathName])
}