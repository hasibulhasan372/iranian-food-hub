import React from 'react';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
    const {id, name, img, likes, numOfRecipes, yearOfExperience } = chef;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <figure><img src={img} className='lg:w-full lg:h-[350px]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>{likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef/${id}`} className="btn btn-primary">View Recipe</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;