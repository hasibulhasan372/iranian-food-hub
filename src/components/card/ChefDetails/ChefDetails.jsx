import React from 'react';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
    const {id, name, img, likes, numOfRecipes, yearOfExperience } = chef;
    return (

        <div className="card card-compact w-72 lg:w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} className='lg:w-5/6 lg:h-[250px] rounded-md' alt="Shoes" /></figure>
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