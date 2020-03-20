import React, {Component} from "react"
import {MDBContainer, MDBCol, MDBRow} from "mdbreact"
import BasicCard from "./BasicCard"

export const ProjectObjects = [
    {
    ProjectName: 'Roller Ball',
    ProjectDescription: "This was the capstone project for my Object-Oriented Programing course. My team of 5 was tasked with creating a functioning Roller Ball Game. We worked in a scrum environment and in 3 sprints we were able to create and host a functioning RESTful application. Roller Ball is a circular chess variant, played on a 7x7 board. More information can be found here: http://history.chess.free.fr/rollerball.htm",
    Tools: "A Java Spark API and a React Front end were used to complete this project. A database was considered for persistent storage, but after meeting with the product owner, it was decided that serialization of information in a text file was the best solution, because the scale was small and the project objective was more focused on our object-oriented approach to the solution.",
    Lessons: "All of the team members had experience with the tools that were used, so I would say that we didn’t gain a large amount of new technical skills from this project.  Instead, this project acted as a testament to our time at CSU. As a team, we were able to take vague instructions from our PO and create a functional web app with in-depth documentation. All while following Agile and Object-Oriented guidelines. The project did provide us with experience working in a team environment and skills that will be useful in a business setting.  One improvement I would make, is that I would spend a little bit more time on the design of the user interface. While the application functions perfectly, improvements in color coordination and visibility could be made.",
    DateFinished: "Dec 2019",
    Link: "https://github.com/hamjared/cs414-f19-001-Blueberries",
    Pictures: ["rollerball.png"]
    },
    {
    ProjectName: 'Arbitrage Analyzer',
    ProjectDescription: "This was the capstone project for my Block Chain course. My team worked together to create a python script that repeatedly calls the public API of three different Crypto Currency Exchange Sites. The program then normalizes the data and calculates opportunities for triangular arbitrage, specifically where the starting and ending currencies are stable coins.",
    Tools: "Shapeshift, Binance, and Coinbase APIs were used to collect data. After the data were normalized and stored, a secondary python script ran statistical analysis. ",
    Lessons: "This project was successful in finding arbitrage opportunities; however, we did not include mining or exchange fees in our calculations as both were dependent on factors that could not be calculated without an actual investment. My main role in this project involved researching arbitrage principles and educating the rest of the team on arbitrage principles’ function.  Our  knowledge of arbitrage at the start was limited, so it was my responsibility to meet with experts in finance and determine what types of algorithms and information we would need to make the project successful. After educating the others, I worked with them to create an object-oriented design that was both functional and efficient. \n If I were to do the project again, I would focus on scale. Instead of doing the project in Python, I think it would be best to do it in C++ with focus on parallel calculations using the CUDA API. This would allow for much more efficient and complex calculations and would be the best option for a Real Time Attack Trading Bot handling actual funds.",
    DateFinished: "May 2019",
    Link: "https://github.com/silkylaroux/BlockChainProject",
    Pictures: ["arbitrage.png", "shapeshift.jpeg", "binance.jpeg", "coinbase.png"]
    },
    {
    ProjectName: 'Jukebox',
    ProjectDescription: "This was a semester long group project for my CIS 320 Project Management course. Because the project proposal that I submitted was chosen, I was given the Project Manager role.  As Project Manager scope and cost were my responsibilities. The goal of this project was to create a LAN jukebox that allows anyone to visit a website and add songs to a FIFO queue. The device would then use a python script to download the songs and play them in the order they were added to the queue on a common speaker.",
    Tools: "A Spring Boot webserver was used with a React frontend on a Raspberry Pi. The front end used the Spotify Search API to help users find songs and the back end parsed the URL of the song request and used an external library to download the file needed. The Raspberry Pi was set up with a static IP and could be attached to a set of speakers with either Bluetooth, Aux, or even HDMI, if you wanted to play music from a TV/Monitor. ",
    Lessons: "This project went very smoothly. At the start my team understood all the different challenges that we would have to conquer, so we were prepared to quickly solve many of the issues as they arose. This was not my first time using React, so I had experience with it and provided most of the support on that part of the project.  The lack of learning curve ensured that the set up was quickly accomplished.  The most challenging task was getting the user verification for Spotify set up properly.",
    DateFinished: "Nov 2018",
    Pictures: ["juke1.png", "juke2.png"]
    },
    {
    ProjectName: 'Alarm Clock',
    ProjectDescription: "I completed this project for my Introduction to Operating Systems class. The alarm clock was a Raspberry Pi with a touchscreen and custom GUI. The interface allowed the alarm clock to show the current time, set an alarm, and turn off the screen so that the light from the display did not keep me awake. It also had a microphone and a speaker, and it ran the open source Google Assistant library in the background",
    Tools: "The user interface was a Java application that I created using the native JSwing library. The touchscreen came with its own software which was used because of the ease of set up. To use the Google Assistant library, I set up a Google Cloud Account and configured the proper authentication tokens. Overall, getting everything to work independently presented very few challenges.",
    Lessons: "Like many things in life, this project was great in theory, but not functional in practice. The software for the touchscreen and the Google Assistant required different versions of Raspbian and as a result, the libraries were incompatible, and I was forced to demonstrate the project in two different parts, hot swapping micro SD cards to show the different pieces. This issue could have been addressed by using a different touchscreen, or by using a HDMI enabled screen and some additional hardware buttons, but due to time constraints, I wasn’t able to procure the additional hardware necessary. This project was a great lesson in the importance of interoperability and system testing, and if I were to do it again, I would verify library compatibility beforehand. ",
    DateFinished: "Dec 2017",
    },
    {
    ProjectName: 'IoT Drapes',
    ProjectDescription: "After the success with my MIDI board project, I attempted another project using a micro controller device. This project was a window covering that could be controlled from my phone/laptop. The end design included interfacing the window covering with an alarm clock so that the blackout curtains would retract when the alarm sounded, and the sun would shine in when it was time to get up. ",
    Tools: "For this project I used a Wi-Fi enabled micro controller, a 6V continuous rotation servo motor, a long dowel as the “curtain rod”, and several yards of blackout fabric. The fabric was wrapped around and attached to the dowel which was mounted above the window on custom made mounting hardware which allowed the entire system to rotate freely.  One end of the dowel was attached to the servo motor. As the servo would spin, the fabric would wrap around the dowel, allowing more or less light through the window, depending on whether the fabric was going up or down. I was able to find a GitHub library that had Arduino code to host a web server that functioned properly on my hardware, and from there I just added the code to parse the server requests, and move the motor accordingly.",
    Lessons: "This project presented the most learning opportunities, including basic household DIY tips, sewing tips and networking protocols.  The weight of the window covering presented challenges in keeping it on the wall; a better mounting system would be critical in a redesign.  Initially, to get the window covering functioning, I parsed the URL of HTTP GET requests and I did not design a GUI or user interface.  To remotely control the window covering movement I had to submit requests to the IP (which was not static) followed by a number between 0 and 100, which corresponded to the percent of window to cover. For example, if I wanted to put the shades all the way down, I would type 10.10.10.24/100 into my browser and it would start spinning.  This was problematic, mostly because of a lack of input sanitation.   This “buggy” system led to the window covering randomly activating, often, in the middle of the night. Overall, the window covering did function, and could be deployed remotely.  However, the physical design, coupled with the unsophisticated electronic interface, led to less than optimal operation.  If I were to design this project now, a total redesign of the hardware and software would result, but the main takeaways from this project are that a basic understanding of networking is crucial for any IoT devices and prototypes of the hardware would shed light on physical limitations prior to launching.",
    DateFinished: "Aug 2017",
    },
    {
    ProjectName: 'Blackjack',
    ProjectDescription: "This blackjack application holds a special place in my heart because it is the first program I wrote on my own. Before I ever took a course in programming, I learned to write code by watching YouTube tutorials. A few lessons into the series, I learned how to use conditionals, and I got excited because it was the first logic I had ever seen outside of Minecraft. The excitement inspired me to write my own command line blackjack game. It was all written in main, the variable names were impossible to understand, and there were many, many, nested conditionals. But I was able to get it to function, and I am super proud of that. As I started taking college courses and becoming a better programmer, I rewrote the game a few different times, each time incorporating new knowledge garnered from my classes. The final iteration of the game was made after I learned about the 4 Object-Oriented Programming Principals. This time, it featured a full GUI and the ability to play online using a peer to peer connection. ",
    Tools: "Every iteration of the blackjack game was written in Java. The final version used JSwing for the GUI, and socket layer networking for the peer to peer connection. ",
    Lessons: "Since I redid this project many times, there were many different skills I applied and refined, but the most important skill I learned from this project was multithreading. When I was writing my final iteration, the GUI had issues when it needed to refresh. As a result of that issue, and with research and through consultation with experts,  I was able to finish the project by moving the GUI into its own thread. I credit a lot of my successes as a programmer to my blackjack games, as they allowed me to challenge myself outside of class, and helped me to put a lot of my newly learned skills to the test. I will probably never do another blackjack game, but if I do, I will do the bulk of the work in solidity, and focus on writing efficient smart contracts so that I can decentralize it and do payments with real cryptocurrency.  ",
    DateFinished: "Nov 2016",
    Pictures: ["blackjack1.png", "blackjack2.png", "blackjack3.png", "blackjack4.png", "blackjack5.png",],
    },
    {
    ProjectName: 'MIDI Board',
    ProjectDescription: "I built this project the summer after my first year of college. It was my first project written in a language other than Java, and it was my first attempt at using any type of microcontroller. For this project, I created a 16-button MIDI keyboard, capable of communicating with Ableton and other MIDI enabled software. The purpose of the keyboard is to act as a drum rack so that users can play sounds and loops at the press of a button. ",
    Tools: "Arcade buttons were used for the inputs, wood for the base, and plastic as the shell, which I molded and shaped using heat. For development I used the Arduino IDE and an Arduino Uno board. A Hairless-MIDISerial software was used as a bridge to test the code before using Atmel Flip to flash the board and make it a fully functional MIDI device.",
    Lessons: "There were multiple challenges associated with this project including software debugging and base/shell design issues.  The primary lessons learned from this project were how to problem solve and improvise. This project challenged my dedication but my ability to fight through the adversity and setbacks and complete my goals is something that I am proud of even today. If I were to do this project again, I would modify hardware and perhaps choose different components. Based on my experience, I would use an Arduino Mega so that I have open pins for lights and potentiometers. I would also choose different design materials for the shell and base that were lighter weight and more flexible. And lastly, I wouldn’t use solid-core wire, as it is brittle and prone to breaking.",
    DateFinished: "Aug 2016",
    Pictures: ["midi1.jpeg", 'midi2.jpg'],
    },];

export class Projects extends Component {
    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light ">My Projects</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        {
                        ProjectObjects.map((proj, index) => (
                            <BasicCard className="z-depth-5"
                                index={index}
                                title={proj.ProjectName}
                                description={proj.ProjectDescription}
                                date={proj.DateFinished}
                                more={true}
                            />
                        ))}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>)
    }
}

