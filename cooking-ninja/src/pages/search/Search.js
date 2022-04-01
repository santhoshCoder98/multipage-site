import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from "../../services/useFetch"
import RecipeList from '../../components/RecipeList';
export default function Search() {
    const queryString = useLocation().search;
    const queryParameter = new URLSearchParams(queryString);
    const query = queryParameter.get('q');

    const url = "http://localhost:3000/recipes?q=" + query;
    const { data, isPending, error } = useFetch(url);
    return (
        <div>
            <h2 className="page-title">Recipes Including: {query}</h2>
            {isPending && <h2 className="loading">Loading...</h2>}
            {error && <h2 className="error">{error}</h2>}
            {data && <RecipeList data={data} />}
        </div>
    )
}
