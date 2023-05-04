import React from 'react';
import { Link } from 'react-router-dom';
import {FaHeart} from 'react-icons/fa'
import LazyLoad from 'react-lazy-load';


const ChefDetails = ({ chef }) => {
    const {id, name, img, likes, numOfRecipes, yearOfExperience } = chef;
    return (

        <div className="card card-compact w-72 lg:w-96 bg-base-100 shadow-xl pt-2">
            <LazyLoad lg:height={250}>
            <figure><img src={img} className='lg:w-5/6 lg:h-[250px] rounded-md' alt="chefs" /></figure>
            </LazyLoad>
            <div className="card-body">
                <h2 className="card-title font-semibold font-serif">{name}</h2>
                <p className='text-xl font-semibold'>Experience: {yearOfExperience} Years</p>
                <p className='text-xl font-semibold'>Chef Special Recipe: {numOfRecipes}</p>

                <p className='flex items-center gap-1 text-lg lg:text-xl'><FaHeart className='text-red-500'></FaHeart> {likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef/${id}`} className="btn btn-primary capitalize font-semibold text-lg">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;