const setDataDb = (id) =>{
    let storedFavMeal = {};
    const getFavMeal = localStorage.getItem('fav-recipe');
    if(getFavMeal){
        storedFavMeal = JSON.parse(getFavMeal);
    }
        const quantity = storedFavMeal[id];
        if(quantity){
            return;
        }
        else{
            storedFavMeal[id] = 1;
        }
        localStorage.setItem('fav-recipe', JSON.stringify(storedFavMeal));
} 
const getDataFromBb = () =>{
    let storedFavMeal = {};
    const getFavMeal = localStorage.getItem('fav-recipe');
    if(getFavMeal){
        storedFavMeal = JSON.parse(getFavMeal);
    }
    return storedFavMeal;
};

const removeFromDb = (id) =>{
    const getFavMeal = localStorage.getItem('fav-recipe');
    if(getFavMeal){
        const storedFavMeal = JSON.parse(getFavMeal)
        if(id in storedFavMeal){
            delete storedFavMeal[id];
            localStorage.setItem('fav-recipe', JSON.stringify(storedFavMeal));
        }
    }
}

export {
    setDataDb,
    getDataFromBb,
    removeFromDb
}