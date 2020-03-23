(this["webpackJsonpyour-app"]=this["webpackJsonpyour-app"]||[]).push([[0],{37:function(e,t,a){},48:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=(a(53),a(54),a(55),a(37),a(2)),s=a(12),c=a(15),d=a(19),m=a.n(d);class h extends n.Component{constructor(e){super(e),h.createTableItem=h.createTableItem.bind(this),h.setExpBarColor=h.setExpBarColor.bind(this),h.createTableWrapper=h.createTableWrapper.bind(this)}static createTableWrapper(e,t,a,n){return n%2===1?r.a.createElement(m.a,{animation:"slideInLeft",delay:(.04*n).toString()+"s"},h.createTableItem(e,t,a)):r.a.createElement(m.a,{animation:"slideInRight",delay:(.04*n).toString()+"s"},h.createTableItem(e,t,a))}static createTableItem(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("strong",null,e)),r.a.createElement("td",null,t),r.a.createElement("td",null,h.setExpBarColor(a)))}static setExpBarColor(e){return e>75?r.a.createElement("div",{className:"meter"},r.a.createElement("span",{style:{width:" "+e+"%"}})):e<=75&&e>=60?r.a.createElement("div",{className:"meter orangeSpan"},r.a.createElement("span",{style:{width:" "+e+"%"}})):r.a.createElement("div",{className:"meter redSpan"},r.a.createElement("span",{style:{width:" "+e+"%"}}))}render(){return r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light "},"Skills"))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{size:"11"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement(i.f,{fluid:!0},r.a.createElement("h3",{className:"text-light"},"Programming Languages"),r.a.createElement("br",null),r.a.createElement("table",{className:"table table-striped table-hover table-bordered table-dark z-depth-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"10%"},scope:"col"},r.a.createElement("strong",null,"Language")),r.a.createElement("th",{style:{width:"60%"},scope:"col"},"Libraries, Frameworks, And Tools Used"),r.a.createElement("th",{style:{width:"25%"},scope:"col"},"Experience"))),r.a.createElement("tbody",null,h.createTableWrapper("Java","Spring, Spark, JUint, Android",95,1),h.createTableWrapper("C++","Qt",80,2),h.createTableWrapper("C","N/A",60,3),h.createTableWrapper("Python","Numpy, Pandas, PyTorch",90,4),h.createTableWrapper("SQL","Microsoft SQL Server, MySQL, Mongoose",75,5),h.createTableWrapper("HTML","N/A",90,6),h.createTableWrapper("CSS","Bootstrap, Material Design",55,7),h.createTableWrapper("JS/JSX","React, Express, Node",85,8),h.createTableWrapper("PHP","N/A",80,9),h.createTableWrapper("Solidity","MetaMask, Rinkeby",65,10),h.createTableWrapper("Arduino","N/A",80,11),h.createTableWrapper("Dart","Flutter",25,12),h.createTableWrapper("Bash","N/A",75,13))))),r.a.createElement(m.a,{animation:"slideInUp"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement("h4",{className:"text-light"},r.a.createElement("strong",null,"Other Tools And Concepts I'm Familiar With:")),r.a.createElement("ul",{className:"tools text-light"},r.a.createElement(i.t,null,r.a.createElement(i.d,{size:"6"},r.a.createElement("li",null,"Scrum"),r.a.createElement("li",null,"Maven"),r.a.createElement("li",null,"NPM/Yarn"),r.a.createElement("li",null,"KISS"),r.a.createElement("li",null,"Agile Development"),r.a.createElement("li",null,"Black Box Testing"),r.a.createElement("li",null,"Test Driven Development"),r.a.createElement("li",null,"Machine Learning"),r.a.createElement("li",null,"Basic Penetration Testing"),r.a.createElement("li",null,"Basic Cryptography"),r.a.createElement("li",null,"JSON"),r.a.createElement("li",null,"Fuzzing")),r.a.createElement(i.d,{size:"6"},r.a.createElement("li",null,"Universal Modeling Language"),r.a.createElement("li",null,"LucidChart"),r.a.createElement("li",null,"Socket Layer Networking"),r.a.createElement("li",null,"RESTful Web Services"),r.a.createElement("li",null,"Full Stack Development"),r.a.createElement("li",null,"Git"),r.a.createElement("li",null,"Hyperledger"),r.a.createElement("li",null,"BlockChain"),r.a.createElement("li",null,"Microsoft Office"),r.a.createElement("li",null,"Google Cloud Platform"),r.a.createElement("li",null,"Docker"),r.a.createElement("li",null,"pfSense")))))))))}}var p=h;const u=[{ProjectName:"Roller Ball",ProjectDescription:"This was the capstone project for my Object-Oriented Programing course. My team of 5 was tasked with creating a functioning Roller Ball Game. We worked in a scrum environment and in 3 sprints we were able to create and host a functioning RESTful application. Roller Ball is a circular chess variant, played on a 7x7 board. More information can be found here: http://history.chess.free.fr/rollerball.htm",Tools:"A Java Spark API and a React Front end were used to complete this project. A database was considered for persistent storage, but after meeting with the product owner (PO), it was decided that serialization of information in a text file was the best solution, because the scale was small and the project objective was more focused on our object-oriented approach to the solution.",Lessons:"All of the team members had experience with the tools that were used, so I would say that we didn\u2019t gain a large amount of new technical skills from this project.  Instead, this project acted as a testament to our time at CSU. As a team, we were able to take vague instructions from our PO and create a functional web app with in-depth documentation. All the while following, Agile and Object-Oriented guidelines. The project did provide us with experience working in a team environment and skills that will be useful in a business setting.  One improvement I would make, is that I would spend a little bit more time on the design of the user interface. While the application functions perfectly, improvements in color coordination and visibility could be made.",DateFinished:"Dec 2019",Link:"https://github.com/hamjared/cs414-f19-001-Blueberries",Pictures:["rollerball.png"]},{ProjectName:"Arbitrage Analyzer",ProjectDescription:"This was the capstone project for my Block Chain course. My team worked together to create a python script that repeatedly calls the public API of three different Crypto Currency Exchange Sites. The program then normalizes the data and calculates opportunities for triangular arbitrage, specifically where the starting and ending currencies are stable coins.",Tools:"Shapeshift, Binance, and Coinbase APIs were used to collect data. After the data were normalized and stored, a secondary python script ran statistical analysis. ",Lessons:"This project was successful in finding arbitrage opportunities; however, we did not include mining or exchange fees in our calculations as both were dependent on factors that could not be calculated without an actual investment. My main role in this project involved researching arbitrage principles and educating the rest of the team on arbitrage principles\u2019 function.  Our  knowledge of arbitrage at the start was limited, so it was my responsibility to meet with experts in finance and determine what types of algorithms and information we would need to make the project successful. After educating the others, I worked with them to create an object-oriented design that was both functional and efficient. \n If I were to do the project again, I would focus on scale. Instead of doing the project in Python, I think it would be best to do it in C++ with focus on parallel calculations using the CUDA API. This would allow for much more efficient and complex calculations and would be the best option for a Real Time Attack Trading Bot handling actual funds.",DateFinished:"May 2019",Link:"https://github.com/silkylaroux/BlockChainProject",Pictures:["arbitrage.png","shapeshift.jpeg","binance.jpeg","coinbase.png"]},{ProjectName:"Jukebox",ProjectDescription:"This was a semester long group project for my CIS 320 Project Management course. Because the project proposal that I submitted was chosen, I was given the Project Manager role.  As Project Manager, scope and cost were my responsibilities. The goal of this project was to create a LAN jukebox that allows anyone to visit a website and add songs to a FIFO queue. The device would then use a python script to download the songs and play them in the order they were added to the queue on a common speaker.",Tools:"A Spring Boot webserver was used with a React front end on a Raspberry Pi. The front end used the Spotify Search API to help users find songs and the back end parsed the URL of the song request and used an external library to download the file needed. The Raspberry Pi was set up with a static IP and could be attached to a set of speakers with either Bluetooth, Aux, or even HDMI, if you wanted to play music from a TV/Monitor. ",Lessons:"This project went very smoothly. At the start, my team understood all the different challenges that we would have to conquer, so we were prepared to quickly solve many of the issues as they arose. This was not my first time using React, so I had experience with it and provided most of the support on that part of the project.  The lack of learning curve ensured that the set up was quickly accomplished.  The most challenging task was getting the user verification for Spotify set up properly.",DateFinished:"Nov 2018",Pictures:["juke1.png","juke2.png"],Link:"https://github.com/rrob1487/Smart-Jukebox"},{ProjectName:"Alarm Clock",ProjectDescription:"I completed this project for my Introduction to Operating Systems class. The alarm clock was a Raspberry Pi with a touchscreen and custom GUI. The interface allowed the alarm clock to show the current time, set an alarm, and turn off the screen so that the light from the display did not keep me awake. It also had a microphone and a speaker, and it ran the open source Google Assistant library in the background",Tools:"The user interface was a Java application that I created using the native JSwing library. The touchscreen came with its own software which was used because of the ease of set up. To use the Google Assistant library, I set up a Google Cloud Account and configured the proper authentication tokens. Overall, getting everything to work independently presented very few challenges.",Lessons:"Like many things in life, this project was great in theory, but not functional in practice. The software for the touchscreen and the Google Assistant required different versions of Raspbian and as a result, the libraries were incompatible, and I was forced to demonstrate the project in two different parts, hot swapping micro SD cards to show the different pieces. This issue could have been addressed by using a different touchscreen, or by using a HDMI enabled screen and some additional hardware buttons, but due to time constraints, I wasn\u2019t able to procure the additional hardware necessary. This project was a great lesson in the importance of interoperability and system testing, and if I were to do it again, I would verify library compatibility beforehand. ",DateFinished:"Dec 2017",Link:"https://github.com/rrob1487/Alarm-Clock"},{ProjectName:"IoT Drapes",ProjectDescription:"After the success with my MIDI board project (described below), I attempted another project using a micro controller device. This project was a window covering that could be controlled from my phone/laptop. The end design included interfacing the window covering with an alarm clock so that the blackout curtains would retract when the alarm sounded, and the sun would shine in when it was time to get up. ",Tools:"For this project I used a Wi-Fi enabled micro controller, a 6V continuous rotation servo motor, a long dowel as the \u201ccurtain rod\u201d, and several yards of blackout fabric. The fabric was wrapped around and attached to the dowel which was mounted above the window on custom made mounting hardware which allowed the entire system to rotate freely.  One end of the dowel was attached to the servo motor. As the servo would spin, the fabric would wrap around the dowel, allowing more or less light through the window, depending on whether the fabric was going up or down. I was able to find a GitHub library that had Arduino code to host a web server that functioned properly on my hardware, and from there I just added the code to parse the server requests, and move the motor accordingly.",Lessons:"This project presented the most learning opportunities, including basic household DIY tips, sewing tips and networking protocols.  The weight of the window covering presented challenges in keeping it on the wall; a better mounting system would be critical in a redesign.  Initially, to get the window covering functioning, I parsed the URL of HTTP GET requests and I did not design a GUI or user interface.  To remotely control the window covering movement I had to submit requests to the IP (which was not static) followed by a number between 0 and 100, which corresponded to the percent of window to cover. For example, if I wanted to put the shades all the way down, I would type 10.10.10.24/100 into my browser and it would start spinning.  This was problematic, mostly because of a lack of input sanitation.   This \u201cbuggy\u201d system led to the window covering randomly activating, often, in the middle of the night. Overall, the window covering did function, and could be deployed remotely.  However, the physical design, coupled with the unsophisticated electronic interface, led to less than optimal operation.  If I were to design this project now, a total redesign of the hardware and software would result, but the main takeaways from this project are that a basic understanding of networking is crucial for any IoT devices and prototypes of the hardware would shed light on physical limitations prior to launching.",DateFinished:"Aug 2017",Link:"https://github.com/rrob1487/IoT-Drapes"},{ProjectName:"Blackjack",ProjectDescription:"This blackjack application holds a special place in my heart because it is the first program I wrote on my own. Before I ever took a course in programming, I learned to write code by watching YouTube tutorials. A few lessons into the series, I learned how to use conditionals, and I got excited because it was the first logic I had ever seen outside of Minecraft. The excitement inspired me to write my own command line blackjack game. It was all written in main, the variable names were impossible to understand, and there were many, many, nested conditionals. But I was able to get it to function, and I am super proud of that. As I started taking college courses and becoming a better programmer, I rewrote the game a few different times, each time incorporating new knowledge garnered from my classes. The final iteration of the game was made after I learned about the 4 Object-Oriented Programming Principals. This time, it featured a full GUI and the ability to play online using a peer to peer connection. ",Tools:"Every iteration of the blackjack game was written in Java. The final version used JSwing for the GUI, and socket layer networking for the peer to peer connection. ",Lessons:"Since I redid this project many times, there were many different skills I applied and refined, but the most important skill I learned from this project was multithreading. When I was writing my final iteration, the GUI had issues when it needed to refresh. As a result of that issue, and with research and through consultation with experts,  I was able to finish the project by moving the GUI into its own thread. I credit a lot of my successes as a programmer to my blackjack games, as they allowed me to challenge myself outside of class, and helped me to put a lot of my newly learned skills to the test. I will probably never do another blackjack game, but if I do, I will do the bulk of the work in solidity, and focus on writing efficient smart contracts so that I can decentralize it and do payments with real cryptocurrency.  ",DateFinished:"Nov 2016",Pictures:["blackjack1.png","blackjack2.png","blackjack3.png","blackjack4.png","blackjack5.png"],Link:"https://github.com/rrob1487/Blackjack"},{ProjectName:"MIDI Board",ProjectDescription:"I built this project the summer after my first year of college. It was my first project written in a language other than Java, and it was my first attempt at using any type of microcontroller. For this project, I created a 16-button MIDI keyboard, capable of communicating with Ableton and other MIDI enabled software. The purpose of the keyboard is to act as a drum rack so that users can play sounds and loops at the press of a button. ",Tools:"Arcade buttons were used for the inputs, wood for the base, and plastic as the shell, which I molded and shaped using heat. For development I used the Arduino IDE and an Arduino Uno board. A Hairless-MIDISerial software was used as a bridge to test the code before using Atmel Flip to flash the board and make it a fully functional MIDI device.",Lessons:"There were multiple challenges associated with this project including software debugging and base/shell design issues.  The primary lessons learned from this project were how to problem solve and improvise. This project challenged my dedication but my ability to fight through the adversity and setbacks and complete my goals is something that I am proud of even today. If I were to do this project again, I would modify hardware and perhaps choose different components. Based on my experience, I would use an Arduino Mega so that I have open pins for lights and potentiometers. I would also choose more lightweight and flexible design materials for the shell and base. And lastly, I wouldn\u2019t use solid-core wire, as it is brittle and prone to breaking.",DateFinished:"Aug 2016",Pictures:["midi1.jpeg","midi2.jpg"],Link:"https://github.com/rrob1487/MIDI-Board"}];class g extends n.Component{static setScroll(e){g.scrollPosition=e}componentDidMount(){window.scrollTo(0,g.scrollPosition)}render(){return r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light "},"My Projects"))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{size:"11"},u.map((e,t)=>r.a.createElement(w,{className:"z-depth-5",index:t,title:e.ProjectName,description:e.ProjectDescription,date:e.DateFinished,more:!0})))))}}g.scrollPosition=0;class f extends n.Component{render(){return r.a.createElement(m.a,{animation:"fadeInLeft"},r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"8"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"8"},r.a.createElement("h2",{className:"text-light"},this.props.title),this.props.date?r.a.createElement("h6",{className:"text-light"},"Date Finished: ",this.props.date):r.a.createElement("div",null),this.props.picture?r.a.createElement("img",{src:this.props.picture,alt:this.props.title,className:"img-fluid z-depth-3"}):r.a.createElement("div",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"text-light"},this.props.description),r.a.createElement("br",null),this.props.more?r.a.createElement(s.b,{to:"/Projects/".concat(this.props.title),onClick:()=>g.setScroll(window.pageYOffset)},"read more"):r.a.createElement("div",null)))))))}}var w=f;class b extends n.Component{render(){return r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light"},"Hobbies"))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{size:"11"},r.a.createElement(w,{className:"z-depth-5",index:1,title:"Hackathons",picture:"/pictures/vrhack.jpg",description:"I participated in my first hackathon in spring 2017 and I've been hooked since. I've competed in all kinds of hackathons including the Fort Collins Start Up Weekend Hackathon, and The CSU VR Hackathon. Something about the fast-paced development environment and diversity of skills keep me coming back."}),r.a.createElement(w,{className:"z-depth-5",index:2,title:"Exploring New Technology",picture:"/pictures/eth.jpg",description:"I've always been an early adopter of technology. I had the first Android, I showed my friends fidget spinners before they were popular, and my Soundcloud likes are full of artists that most people have never heard of. I get a thrill out of discovering and learning new things, and technical solutions are no exception. AI and Blockchain were some of my favorite classes in college.  I can't wait to see what new tech the future holds."}),r.a.createElement(w,{className:"z-depth-5",index:3,title:"Gaming",picture:"/pictures/smash.jpg",description:"Growing up I played a lot of videogames, and nowadays it's no different. Whether I'm competing in Super Smash Bros Melee Tournaments, or casually playing Minecraft, I prefer videogames to any other form of media."}),r.a.createElement(w,{className:"z-depth-5",index:4,title:"Sports",picture:"/pictures/quidditch.jpg",description:"Sports have always been a big part of my life and they have taught me many lessons through the years such as team work, compromise, and sportsmanship. I played football from third grade through my senior year of high school, and I ran track all four years of high school.  Because sports are such an important part of my life, I also joined the CSU Quidditch team.  For me, sports are a great way to stay healthy and make new friends."}),r.a.createElement(w,{className:"z-depth-5",index:5,title:"Music",picture:"/pictures/FunkyCollage.jpg",description:"To me, music is more than just a way to pass time, it's a way to bond with the people around me. From rocking out to Bon Jovi with my mom, to headbanging to Defunk with my friends, music has brought me closer to many of the people around me."}))))}}var y=b,E=a(85),k=a(84);class v extends n.Component{constructor(e){super(e),v.createCardBodyComponent=v.createCardBodyComponent.bind(this),v.getColor=v.getColor.bind(this)}static getColor(e){let t;return t=e%2===0?"bootstrapDark-1 text-light":"bootstrapDark-2 text-light",t}static createCardBodyComponent(e,t){return r.a.createElement(i.b,{className:v.getColor(t)},r.a.createElement("ul",{style:{paddingLeft:"8vh",paddingRight:"4vh"}},e.map(e=>r.a.createElement("li",null,e))))}render(){return r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light"},"Experience"))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{size:"11"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement(E.a,{className:"z-depth-5"},r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-1 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"0"},"The Regis Company - Modeling Intern (July 2019 - August 2019)")),r.a.createElement(E.a.Collapse,{eventKey:"0"},v.createCardBodyComponent(["Analyzed, documented, and helped to refactor a backend system with little or no guidance","Worked efficiently and effectively within a fast-paced scrum environment","Demonstrated ability to drive for results, deal with ambiguity, prioritize work based on changing business dynamics, meet deadlines, and operate with personal and professional integrity"],0))),r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-2 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"1"},"Smash Burger - Preparation/Cooking Staff (May 2018 - August 2018)")),r.a.createElement(E.a.Collapse,{eventKey:"1"},v.createCardBodyComponent(["Demonstrated strong workflow management skills as shown by my ability to keep up with demand during peak hours","Exhibited excellent communication skills as evidenced by effective communication with a large, diverse group of people","Was actively responsive and able to understand the needs of others to ensure delivery of the desired results"],1))),r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-1 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"2"},"King Soopers - Deli Clerk (July 2017 - September 2017)")),r.a.createElement(E.a.Collapse,{eventKey:"2"},v.createCardBodyComponent(["Analyzed differing daily situations and responded by adjusting and reassigning tasks","Helped to resolve customer complaints in a professional and effective manor"],2))),r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-2 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"3"},"Radio Shack - Sales Associate (June 2016 - August 2016)")),r.a.createElement(E.a.Collapse,{eventKey:"3"},v.createCardBodyComponent(["Demonstrated reliability when given additional responsibility such as training new staff and opening the store","Displayed leadership skills and capabilities in both team and individual dynamics"],3))),r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-1 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"4"},"JP Total Landscaping - Crew Assistant (May 2015 - August 2015)")),r.a.createElement(E.a.Collapse,{eventKey:"4"},v.createCardBodyComponent(["Learned and adapted quickly as shown through my ability to replicate procedures after just one instruction"],4))),r.a.createElement(i.a,null,r.a.createElement(i.c,{className:"bootstrapDark-2 text-light"},r.a.createElement(E.a.Toggle,{className:"text-light",as:k.a,variant:"link",eventKey:"5"},"Kittredge Animal Clinic - Kennel Technician (May 2014 - March 2015)")),r.a.createElement(E.a.Collapse,{eventKey:"5"},v.createCardBodyComponent(["Assisted owner with varying specialized, technical, and physical responsibilities, even when those responsibilities were outside of the scope of the job"],5))))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}var I=v;class j extends n.Component{render(){return r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light"},"About Me"))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{size:"11"},r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"8"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"7",sm:"12"},r.a.createElement("p",{className:"text-light indent-text"},"Hi my name is Robbie Weinel, my pronouns are he/him, and I'm a developer and business professional from Colorado. I graduated from Colorado State University in December 2019 with a double major in Computer Science and Business Administration with a concentration in Computer Information Systems. If I had to pick 5 words to describe myself, they would be: competitor, inventor, intreprenuer, autotelic, and team-player. I am interested in job opportunities in security, research, system administration, system architecture, and backend/fullstack development. I'm also interested in any projects related to machine learning, blockchain, robotics, or any job where I can help to make a positive impact on the environment. Please contact me with any job opportunities or questions, my contact information is in the page header.")),r.a.createElement(i.d,{md:"5",sm:"12"},r.a.createElement("img",{style:{marginTop:"8vh"},src:"/pictures/me.jpg",alt:this.props.title,className:"img-fluid z-depth-3"}),r.a.createElement("br",null),r.a.createElement("br",null)))))))))}}var N=j,T=a(35);class x extends n.Component{constructor(e){super(e),this.state={ProjectName:"Project Doesn't Exist",Pictures:["unavailable.png"],ProjectDescription:"bop",DateFinished:"",Tools:"",Lessons:"",Link:null},x.updateState=x.updateState.bind(this)}componentDidMount(){const e=this.props.match.params.ProjectName;u.forEach((t,a)=>{t.ProjectName===e&&this.setState(t)}),this._isMounted=!0,window.scrollTo(0,0)}componentWillUnmount(){this._isMounted=!1}static updateState(e){u.forEach((t,a)=>{t.ProjectName===e&&(console.log(t.ProjectName),console.log("isMounted: ".concat(this._isMounted)),this._isMounted&&this.setState(t))})}render(){return r.a.createElement("div",null,r.a.createElement(i.f,{fluid:!0,className:"elegant-color-dark"},r.a.createElement("br",null),r.a.createElement(s.b,{to:"",onClick:()=>this.props.history.goBack()},"back to all projects"),r.a.createElement(i.t,{style:{height:"15vh"}},r.a.createElement(i.d,null,r.a.createElement(i.f,{className:"flex-center"},r.a.createElement("h1",{className:"text-light "},this.state.ProjectName))),r.a.createElement(i.d,{size:"9"})),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"10"},r.a.createElement(i.m,{className:"elegant-color z-depth-5"},r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"4"},r.a.createElement("h2",{className:"text-light"},"Date Finished:"),r.a.createElement("p",{className:"text-light"},this.state.DateFinished),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-light"},"Project Description:"),r.a.createElement("p",{className:"text-light"},this.state.ProjectDescription)),r.a.createElement(i.d,{className:"pictures",md:"6"},r.a.createElement(T.a,{controls:!1},this.state.Pictures.map(e=>r.a.createElement(T.a.Item,null,r.a.createElement("img",{height:"300vh",className:"z-depth-3",src:"".concat("/pictures/",e),alt:this.state.ProjectName})))))),r.a.createElement("br",null),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"10"},r.a.createElement("h2",{className:"text-light"},"The following is a list of tools used during this project:"),r.a.createElement("p",{className:"text-light"},this.state.Tools))),r.a.createElement("br",null),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"10"},r.a.createElement("h2",{className:"text-light"},"Lessons Learned:"),r.a.createElement("p",{className:"text-light"},this.state.Lessons))),r.a.createElement("br",null),r.a.createElement(i.t,{center:!0},r.a.createElement(i.d,{md:"10"},r.a.createElement("h2",{className:"text-light"},"Link To Code:"),r.a.createElement("p",{className:"text-light"},this.state.Link?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.Link},r.a.createElement(i.l,{fab:!0,icon:"github"})," - ",this.state.Link):"Coming Soon")))))),r.a.createElement(s.b,{to:"",onClick:()=>this.props.history.goBack()},"back to all projects"),r.a.createElement("br",null)))}}var C=x;class P extends n.Component{constructor(e){super(e),this.state={collapse:!1},this.needsRefresh=!1,this.onClick=this.onClick.bind(this)}onClick(){this.setState({collapse:!this.state.collapse})}update(e){C&&C.updateState(e)}render(){return r.a.createElement(s.a,null,r.a.createElement("header",null,r.a.createElement(i.p,{color:"elegant-color",dark:!0,expand:"md"},r.a.createElement(i.q,{href:"/"},r.a.createElement("strong",null,"Robbie Weinel")),r.a.createElement(i.s,{onClick:this.onClick}),r.a.createElement(i.e,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(i.r,{left:!0},r.a.createElement(i.n,null,r.a.createElement(i.o,{to:"/Skills"},"Skills")),r.a.createElement(i.n,null,r.a.createElement(i.o,{to:"/Exp"},"Experience")),r.a.createElement(i.n,null,r.a.createElement(i.g,null,r.a.createElement(i.j,{nav:!0},r.a.createElement("span",{className:"mr-2"},"My Projects")),r.a.createElement(i.i,null,r.a.createElement(i.h,null,r.a.createElement("a",{href:"#/Projects"},"All Projects")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(i.h,null,r.a.createElement("a",{href:"#/Hobbies"},"My Hobbies")))))),r.a.createElement(i.r,{right:!0},r.a.createElement(i.n,null,r.a.createElement("h6",{className:"nav-link"},"robbie.weinel@gmail.com")),r.a.createElement(i.n,null,r.a.createElement("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rrob1487"},r.a.createElement(i.l,{fab:!0,icon:"github"}))),r.a.createElement(i.n,null,r.a.createElement("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/robbie-weinel-0013911a2/"},r.a.createElement(i.l,{fab:!0,icon:"linkedin"}))),r.a.createElement(i.n,null,r.a.createElement("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/robbie_weinel/"},r.a.createElement(i.l,{fab:!0,icon:"instagram"})))))),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(c.a,{path:"/Skills"},r.a.createElement(p,{props:this.props})),r.a.createElement(c.a,{path:"/Hobbies"},r.a.createElement(y,null)),r.a.createElement(c.a,{path:"/Exp"},r.a.createElement(I,null)),r.a.createElement(c.a,{exact:!0,path:"/Projects"},r.a.createElement(g,null)),r.a.createElement(c.a,{exact:!0,path:"/Projects/:ProjectName",component:C}))))}}var S=P;class A extends n.Component{render(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(i.k,{color:"elegant-color"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(i.f,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: Robbie Weinel"))))}}var D=A;const M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");M?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):B(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):B(e)})}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.99bceff9.chunk.js.map