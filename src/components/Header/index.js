import profilePic from '../../images/profile.png'
function Header() {
    return (
        <header>
            <section className="left">
                <div className="img">
                <img src = {profilePic} alt = 'me'/>
                </div>
            </section>

            <section className="right">
            <h1>Hi, I'm Tyler, a <span>Full Stack Web Developer</span>.</h1>
            </section>
        </header>
    )
}

export default Header;