'use server';

import { redirect } from "next/dist/server/api-utils";

const { saveMeal } = require("./meals");

export async function shareMeal(prevState, formData) { 

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    if (!meal.title || 
        !meal.summary || 
        !meal.instructions || 
        !meal.image || 
        !meal.creator || 
        !meal.creator_email || 
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0 ) 
        {
      return {
        message: 'Please provide all required information.'
      }
    }

    await saveMeal(meal);
    redirect('/meals');
  }