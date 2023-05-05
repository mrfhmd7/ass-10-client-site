import { useParams } from 'react-router-dom';
import ChefsBanner from '../Components/ChefsBanner/ChefsBanner';
import Recipes from '../Components/Recipes/Recipes/Recipes';
import './ChefsRecipes.css';

export default function ChefsRecipes() {
  const { chefID } = useParams();

  return (
    <div>
      <ChefsBanner chefID={chefID} />
      <Recipes />
    </div>
  );
}
