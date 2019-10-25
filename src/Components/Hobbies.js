import React, {Component} from "react"
import {MDBCol, MDBContainer, MDBRow} from "mdbreact"
import HobbiesCard from "./HobbiesCard"

class Hobbies extends Component {
    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light">Hobbies</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        <HobbiesCard className="z-depth-5"
                            index={1}
                            title="Gaming"
                            picture={process.env.PUBLIC_URL + '/pictures/smash.jpg'}
                            description="Growing up I played a lot of videogames, and nowadays it's no different. Whether I'm competing in Super Smash Bros
                            Melee Tournaments, or casually playing Minecraft, I prefer videogames to any other form of media."
                        />
                        <HobbiesCard className="z-depth-5"
                            index={2}
                            title="Sports"
                            picture={process.env.PUBLIC_URL + '/pictures/quidditch.jpg'}
                            description="Sports have always been a big part of my life and they have taught me many lesson throughout the years.
                            I played football from third grade to senior year of highschool, I ran track throughout highschool,
                            and I even joined the CSU Quidditch team when I got to college. For me, sports are a great way to stay healthy and make new friends."
                        />
                        <HobbiesCard className="z-depth-5"
                            index={3}
                            title="Music"
                            picture={process.env.PUBLIC_URL + '/pictures/FunkyCollage.jpg'}
                            description="To me, music is more than just a way to pass time, it's a way to bond with the people around me.
                            From rocking out to Bon Jovi with my mom, to headbanging to Defunk with my friends, music has brought me closer to many of the people around me."
                        />
                        <HobbiesCard className="z-depth-5"
                            index={4}
                            title="Hackathons"
                            picture={process.env.PUBLIC_URL + '/pictures/vrhack.jpg'}
                            description="I participated in my first hackathon spring 2017 and I've been hooked since.
                            I've competed in all kinds of hackathons ranging from Fort Collins Start Up Weekend, to The CSU VR Hackathon.
                            Something about the fast passed development environment and diversity of skills to learn keep me coming back."
                        />
                        <HobbiesCard className="z-depth-5"
                            index={5}
                            title="Exploring New Technology"
                            picture={process.env.PUBLIC_URL + '/pictures/eth.jpg'}
                            description="I've always been an early adopter. I had the first Android, I showed my friends fidget spinners before they were 'cool',
                            and my Soundcloud likes are full of artists that most people have never heard of. I get a thrill out of discovering and learning new things, and
                            technical solutions are no exception. AI and Blockchain are some of my favorite classes I took in college, and I can't wait to see what new tech the future holds. "
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}


export default Hobbies