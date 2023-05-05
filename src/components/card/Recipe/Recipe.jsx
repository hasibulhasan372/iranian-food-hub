import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


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
        <section >
            <div className='bg-[#eee4dd]'>
                <div className='my-container m-auto '>
                    <div className='py-10 grid lg:grid-cols-2 lg:gap-20'>
                        <div className='text-right'>
                            <h1 className='text-3xl font-serif'> {chef.name} </h1>
                            <p><span className='text-2xl font-bold'>Bio:</span> {chef.bio} </p>
                            <p className='text-xl font-semibold'>Experience: {chef.yearOfExperience} Years</p>
                            <p className='text-xl font-semibold'>Chef Special Recipe: {chef.numOfRecipes}</p>
                           <div className='text-center'>
                           <p className='flex justify-end items-center gap-1 text-lg lg:text-xl'><FaHeart className='text-red-500'></FaHeart> {chef.likes}</p>
                           </div>
                        </div>
                        <div>
                            <LazyLoadImage
                            src= {chef.bg_photo}
                            className='w-5/6 h-[400px]'
                            effect='blur'
                            ></LazyLoadImage>
                        </div>
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