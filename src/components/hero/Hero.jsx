import "./hero.css";

const Hero = () => {
    return <div className = "hero">
        <div className="hSection left">
            <h1 className="hTitle">
                Olá a Todos 
                <br/>
                <span>Eu sou Otávio</span>
            </h1>
            <div className="awards">
                <h2>Dev Experiente !</h2>
                <p>Experiencias</p>
                <div className="awardList">
                    <img src="/award1.png" alt="" />
                    <img src="/award2.png" alt="" />
                    <img src="/award3.png" alt="" />
                </div>
            </div>
            {/* Scroll SVG*/}
            <a href="services">
                <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        

                </svg>
            </a>
        </div>
        <div className="hSection right"></div>

    </div>;
};

export default Hero;