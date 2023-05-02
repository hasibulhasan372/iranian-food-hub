import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData();
    const {chef_id} = recipes[0]
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[]);
    
    console.log(recipes, chefs, chef_id)
    return (
        <div>
            <h1>Hello Here is the recipe</h1>
        </div>
    );
};

export default Recipe;