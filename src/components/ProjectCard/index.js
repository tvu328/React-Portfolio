function projectCard({title, image, website, code}) {
    return (<section style = {{width: '18em'}}>
        <div className="card">
            <div className="img">
                <img src = {image} alt = {title} style = {{width: '100%' }} />
            </div>
            <h4>{title}</h4>
            <div className="buttons">
                <button><a href = {website}>Site</a></button>
                <button><a href = {code}>Code</a></button>
            </div>
        </div>
    </section>)
} 

export default projectCard