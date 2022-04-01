import { useState, useRef, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config';
import { useHistory } from "react-router-dom"

//styles
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory();



    const addIngredient = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing]);
        }
        setNewIngredient('');
        ingredientInput.current.focus()
    }

    const submitRecipe = async (e) => {
        e.preventDefault();
        const recipeDetails = {
            title: title,
            ingredients: ingredients,
            method: method,
            cookingTime: cookingTime + " minutes"
        }
        const doc = recipeDetails;
        try {
            await projectFirestore.collection("recipes").add(doc)
            history.push("/")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>
            <form onSubmit={submitRecipe}>
                <label>
                    <span>Title:</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Ingredients</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            value={newIngredient}
                            onChange={(e) => setNewIngredient(e.target.value)}
                            ref={ingredientInput}
                        />
                        <button className="btn" onClick={addIngredient}>Add</button>
                    </div>
                </label>
                <p> Current Ingredients: {ingredients.map(i => <em key={i}>{i},</em>)}</p>
                <label>
                    <span>Method:</span>
                    <textarea
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Cooking Time</span>
                    <input
                        type="number"
                        value={cookingTime}
                        onChange={(e) => setCookingTime(e.target.value)}
                        required
                    />
                </label>
                <button className="btn">Submit</button>
            </form>
            {/* {success && <Redirect to="/">
                <Home />
            </Redirect>} */}
        </div>
    )
}
