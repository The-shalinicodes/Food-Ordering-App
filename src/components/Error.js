import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err=useRouteError();
    
    return(
        <div>
            <h1>Error 404</h1>
            <p>Page Not Found</p>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please check the URL or return to the home page.</p>
            <h3>{err.status} :{err.statusText}</h3>
        </div>
    )
}
export default Error;