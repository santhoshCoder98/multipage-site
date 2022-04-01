import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useHistory } from "react-router-dom"
import './RecipeList.css'
import deleteIcon from '../assets/deleteIcon.svg'
import { projectFirestore } from '../firebase/config'
export default function RecipeList({ data }) {
    const { mode } = useTheme()
    const history = useHistory()
    if (data.length === 0) {
        return <div className="error">No Recipes to Load...</div>
    }

    const handleClick = async (id) => {
        console.log(id);
        await projectFirestore.collection("recipes").doc(id).delete()
        history.push("/");
    }

    return (
        <div className="recipe-list">
            {data.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3 className="title">{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This.</Link>
                    <img
                        src={deleteIcon}
                        className="delete"
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}
