import ModuleList from "../Modules/ModuleList"
import HomeButtons from "./HomeButtons"
import "./index.css"

function Home() {

    return (
        <div className='row'>
            <div className='col-8'>
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className='col-4 buttons-list'>
                <h6>Course Status</h6>
                <HomeButtons />
            </div>
        </div>
    );
}
export default Home;