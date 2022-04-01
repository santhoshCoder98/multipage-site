import './Home.css'
import { projectFirestore } from '../../firebase/config';
import RecipeList from '../../components/RecipeList';
import { useState, useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true);
        const fetchData = projectFirestore.collection("recipes").onSnapshot((snapshot) => {
            //console.log(snapshot)
            if (snapshot.empty) {
                setError("No Recipes to Load")
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results);
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => fetchData()

    }, [])

    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isPending && <div className="loading">Loading...</div>}
            {data && <RecipeList data={data} />}
        </div>
    )
}
