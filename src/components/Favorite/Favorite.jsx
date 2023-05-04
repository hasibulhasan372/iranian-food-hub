import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataFromBb, removeFromDb } from '../../utility/fakedb';
import Banner from '../Banner/Banner';

const Favorite = () => {
    const recipes = useLoaderData();
    const storedData = getDataFromBb();
    let favRecipe = [];
    const [allFav, setAllFav] = useState([])
    if (storedData) {
        for (const id in storedData) {
            const getRecipe = recipes.find(recipe => recipe.id === parseInt(id));
            favRecipe.push(getRecipe)
        }
    }
    useEffect(() => {
        if (favRecipe) {
            setAllFav(favRecipe)
        }
    }, []);

    const handleRemoveFav = (id) =>{
        const remainFav = allFav.filter( f => f.id !== id)
        setAllFav(remainFav);
        removeFromDb(id)
    }

    return (
        <div>
            <Banner></Banner>
            <div className=' py-20 bg-[#1b4352]'>

                <div className='my-container grid lg:grid-cols-3 lg:gap-6'>
                    {
                        allFav.map(getFavRecipe => <div key={getFavRecipe.id}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className='h-[220px] w-full' src={getFavRecipe.img} alt="Recipe" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title mb-2">{getFavRecipe.name}</h2>
                                    <p className='pb-2 text-white text-2xl font-semibold leading-5'>Cooking Direction: <br />
                                        <span className='text-base font-normal text-[#000]'>{getFavRecipe.cookingMethods.slice(0, 100)}...
                                            <button className='text-blue-700'>Read More</button>
                                        </span>
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleRemoveFav(getFavRecipe.id)} className="btn btn-primary">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;