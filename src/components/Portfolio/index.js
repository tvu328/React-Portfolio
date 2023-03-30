import weatherDashboard from '../../images/weather.png'
import noteTaker from '../../images/note.png'
import workSchedule from '../../images/workschedule.png'
import codeQuiz from '../../images/codequiz.png'
import passwordGenerator from '../../images/passwordgenerator.png'
import proPortfolio from '../../images/professionalportfolio.png'
import ProjectCard from '../ProjectCard/index'
function Portfolio() {
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
            title: 'note taker',
            image: noteTaker,
            website: 'https://note-taker142.herokuapp.com/notes',
            code: 'https://github.com/tvu328/Note-Taker'
        },
        {
            id: 3,
            title: 'work day scheduler',
            image: workSchedule,
            website: 'https://tvu328.github.io/Work-Day-Scheduler/',
            code: 'https://github.com/tvu328/Work-Day-Scheduler'
        },
        {
            id: 4,
            title: 'code quiz',
            image: codeQuiz,
            website: 'https://tvu328.github.io/Code-Quiz/',
            code: 'https://github.com/tvu328/Code-Quiz'
        },
        {
            id: 5,
            title: 'password generator',
            image: passwordGenerator,
            website: 'https://tvu328.github.io/Password-Generator/',
            code: 'https://github.com/tvu328/Password-Generator'
        },
        {
            id: 6,
            title: 'professional portfolio',
            image: proPortfolio,
            website: 'https://tvu328.github.io/Professional-Portfolio/',
            code: 'https://github.com/tvu328/Professional-Portfolio'
        }
    ]
    return (
        <section className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
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

export default Portfolio