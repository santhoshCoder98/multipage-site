import { useParams, useHistory } from "react-router-dom"
import { useEffect } from "react";
import { useFetch } from "../services/useFetch"
export default function Article() {
    const { id } = useParams();
    const url = "http://localhost:3000/articles/" + id;
    const { data, isPending, error } = useFetch(url);
    const history = useHistory();
    useEffect(() => {
        if (error) {
            //redirect
            setTimeout(() => history.push('/'), 2000)
        }
    }, [error, history])

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    <h2>Title: {data.title}</h2>
                    <p>Author: {data.author}</p>
                    <p>Details: {data.body}</p>
                </div>
            )}
        </div>
    )
}
