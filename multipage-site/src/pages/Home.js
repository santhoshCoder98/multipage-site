import { useFetch } from '../services/useFetch'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/articles')

    return (
        <div className="home">
            <h2>Home</h2>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {data && data.map((article) => (
                <div key={article.id} className="card">
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <Link to={`/article/${article.id}`}>Read More...</Link>
                </div>
            ))}
        </div>
    )
}
