import './Recipe.css'
import { projectFirestore } from '../../firebase/config';
import { useParams } from "react-router-dom"
import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react';


export default function Recipe() {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { mode } = useTheme()

    useEffect(() => {
        setIsPending(true);
        const fetchData = projectFirestore.collection("recipes").doc(id).onSnapshot((doc) => {
            console.log(doc)
            if (!doc.exists) {
                setError("Recipe does not Exist")
                setIsPending(false);
            } else {
                setIsPending(false);
                setData(doc.data())
            }
        }, (err) => {
            setError(err.message);
            setIsPending(false)
        })

        return () => fetchData()

    }, [id])

    const handleClick = () => {
        projectFirestore.collection("recipes").doc(id).update({
            title: "Dragon"
        })
    }

    return (
        <div className={`recipe ${mode}`}>
            {isPending && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            {data && (
                <div>
                    <h2 className="page-title">{data.title}</h2>
                    <p>Takes {data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                    <p className="method">{data.method}</p>
                    <button onClick={() => handleClick()}>Update</button>
                </div>
            )}
        </div>
    )
}
