import axios from "axios";

 function getRandomCocktail() {
   
   const randomCoctail = axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => res.data)
     
   return randomCoctail
    
}


function getCocktailForLetter(searchValue) {
   
   const coctail = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue == '' ? 'a' : searchValue}`).then(res => res.data)
     
   return coctail
    
}
export {getRandomCocktail, getCocktailForLetter}