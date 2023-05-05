import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';
import './Recipes.css';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://server-side-mrfhmd7-gmailcom.vercel.app/recipes`).then((result) => {
      setIsLoading(false);
      setRecipes(result.data);
    });
  }, []);

  return isLoading ? (
    <Spinner animation="border" variant="success" />
  ) : (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
