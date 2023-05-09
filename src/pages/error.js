import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <MainNavigation />
      <main>
        <h1>oops</h1>
        <p>Sorry, something went wrong</p>
        
      </main>
    </>
  );
}

export default ErrorPage;
