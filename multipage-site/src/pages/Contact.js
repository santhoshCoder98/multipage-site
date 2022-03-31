import { useLocation } from "react-router-dom"
export default function Contact() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    console.log(queryString, queryParams.get("name"), queryParams.get("article"));

    return (
        <div>
            <h2>Contact Us</h2>
            <p>Consectetur tempor enim officia non sit ad sit culpa quis anim non. Occaecat ut qui consequat proident culpa proident ea et proident deserunt exercitation exercitation minim. Deserunt ullamco magna laborum dolore commodo. Elit dolor enim quis dolore culpa. Amet mollit culpa quis ad sit ullamco aute adipisicing officia. Qui Lorem duis est et veniam sunt culpa reprehenderit eiusmod consequat. Reprehenderit amet elit deserunt labore magna veniam et tempor nostrud.</p>
        </div>
    )
}
