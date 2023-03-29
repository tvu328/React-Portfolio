import weatherDashboard from '../../images/weather.png'
import ProjectCard from '../ProjectCard/index'
function Work() {
    const myproject = [
        {
            id: 1,
            title: 'weather dashboard',
            image: weatherDashboard,
            website: 'https://tvu328.github.io/Weather-Dashboard/',
            code: 'https://github.com/tvu328/Weather-Dashboard'
        },
        {
            id: 2,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 3,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 4,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 5,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 6,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 7,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 8,
            title: 'weather dashboard',
            image: weatherDashboard,
        },
        {
            id: 9,
            title: 'weather dashboard',
            image: weatherDashboard,
        }
    ]
    return (
        <section className="work" id="work">
            <h1>My Work</h1>
            <main>
                {
                    myproject.map(project => {
                    return (
                        <ProjectCard key = {project.id} title = {project.title} image = {project.image} website = {project.website} code = {project.code}/>
                    )
                    })
                }
            </main>
            {/* <main>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="card">
                        <div className="img"></div>
                        <h4>Proj Name</h4>
                        <div className="buttons">
                            <button><a>Site</a></button>
                            <button><a>Code</a></button>
                        </div>
                    </div>
                </section>
            </main> */}
        </section>
    )
}

export default Work