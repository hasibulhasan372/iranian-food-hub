import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';

const RecipeDetails = ({ recipe }) => {
  const { name, ratings, img, ingredients, cookingMethods } = recipe;
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleFavorite = () =>{
        setBtnDisabled(false)
        return toast("This is my favorite Recipe");
         
  }

  return (

    <div className='flex gap-6 justify-start border border-[#1ecb71]  p-4 rounded'>
      <LazyLoad height={288}><img className='lg:h-72 w-[560px] rounded' src={img} alt="!recipe photo" /></LazyLoad>
      <div className="w-[200px] flex flex-col justify-between">
        <h2 className="text-3xl text-white font-serif pt-2">{name}</h2>
        <div>
        <div className='flex gap-2 '>
        <Rating style={{ maxWidth: 100 }} value={Math.round(ratings || 0)} readOnly  />
          <span className='text-[#1ecb71]'>{ratings}</span>
        </div>
        <div className="mt-3 ">
          <button onClick={handleFavorite} disabled={!btnDisabled} className="favorite-btn">Favorite</button>
        </div>
        </div>
      </div>
      <div className='w-[300px]'>
        <h2 className='text-xl pb-2 text-white font-semibold '>Ingredients:</h2>
      <p className='list-decimal  pb-4'> {ingredients?.map((i, index) =>
          <li key={index} className='font-normal text-base capitalize text-[#1ecb71]'>{i}</li>
        )}
        </p>
        <p className='pb-2 text-white text-2xl font-semibold leading-5'>Cooking Direction: <br />
        <span className='text-base font-normal text-[#1ecb71]'>{cookingMethods.slice(0,100)}...
        <button className='text-white'>Read More</button>
        </span>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>

  );
};

export default RecipeDetails;