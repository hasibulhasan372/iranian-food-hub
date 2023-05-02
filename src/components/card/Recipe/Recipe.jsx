import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipe = () => {
    const recipes = useLoaderData();
    const { chef_id } = recipes[0]
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('https://iranian-food-hub-server-hasibulhasan372.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                const selectedChef = data.find(cook => cook.id === chef_id)
                setChef(selectedChef)
            })
    }, []);

    return (
        <div className='my-container m-auto'>
            <div className='py-20 grid lg:grid-cols-2 lg:gap-20'>
                <div>
                    <h1>Hello Here is the recipe: {chef.name} </h1>
                </div>
                <div>
                    <img className='w-5/6 h-[600px]' src={chef.img} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3'>
                {
                    recipes.map(recipe => <RecipeDetails
                        recipe={recipe}
                        key={recipe.id}

                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default Recipe;