import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Recipe = () => {
    const { loading } = useState(AuthContext)
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
        <section>
            <div className='my-container m-auto'>
            <div className='py-20 grid lg:grid-cols-2 lg:gap-20'>
                <div>
                    <h1>Hello Here is the recipe: {chef.name} </h1>
                </div>
                <div>
                    <img className='w-5/6 h-[600px]' src={chef.img} alt="" />
                </div>
            </div>

            
        </div>
        <div className='bg-[#1b4352] py-16'>
            <div className='my-container pr-20 '>
                <h1 className='text-[#fff] text-3xl font-serif font-semibold pb-4 text-center'>Chef Special</h1>
                {
                    loading ?
                        <div className='flex justify-center'><div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div></div>
                        :
                        <div className='space-y-10 '>
                            {
                                recipes.map(recipe => <RecipeDetails
                                    recipe={recipe}
                                    key={recipe.id}

                                ></RecipeDetails>)
                            }
                        </div>
                }

            </div>
        </div>
        </section>
    );
};

export default Recipe;