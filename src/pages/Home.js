import {Link} from 'react-router-dom';
function Home() {
    return <><h1>This is the home Page</h1>
    {/* Link does not causes browser to reload and does no rerender the whole thing again instead 
    siply takes us to the exact location */}
    <p>Go to <Link to='/products'>the list of the products</Link></p>
    </>;
}

export default Home;