import React from "react";
import styled from "styled-components";



class AboutPage extends React.Component {
    render() {
        return (
            <div className="Homepage">
                <section className="top-content">
                    <div className="About">
                        <h2>About</h2>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                    <div className="Strategy">
                        <h2>Strategy</h2>
                        <p>Proin sed quam sed tellus vestibulum ultrices quis in nunc. Phasellus id dui id tortor tincidunt efficitur. Proin faucibus imperdiet erat, non varius lacus. Maecenas non nisl id turpis egestas tincidunt. Nam condimentum venenatis magna eget finibus.
                        </p>
                        <button>Click to Learn More</button>
                    </div>
                </section>
                <section className="MiddleContent">
                    <div className="Places">
                        <h2>Places We Work</h2>
                        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className="Places">
                        <h2>Collaboration</h2>
                        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        </p>
                        <button>Find Your next Groove</button>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default AboutPage;