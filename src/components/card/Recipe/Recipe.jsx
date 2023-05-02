import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData();
    const {chef_id} = recipes[0]
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => {
           const selectedChef = data.find(cook => cook.id === chef_id)
           setChef(selectedChef)
        })
    },[]);
   
    console.log(chef.id)
    return (
        <div>
            <h1>Hello Here is the recipe: {chef.name} </h1>
        </div>
    );
};

export default Recipe;