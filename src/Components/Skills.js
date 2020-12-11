import React, {Component} from "react"
import {MDBContainer, MDBCol, MDBJumbotron, MDBRow} from "mdbreact"
import ReactWOW from "react-wow"

class Skills extends Component {
    constructor(props) {
        super(props)
        Skills.createTableItem = Skills.createTableItem.bind(this)
    }

    static createTableItem(language, tools, width) {
        return (
            <tr>
                <th scope="row"><strong>{language}</strong></th>
                <td>{tools}</td>
            </tr>
        )
    }

    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light ">Skills</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        {/*Table*/}
                        <ReactWOW animation="fadeInLeft">
                            <MDBJumbotron className="elegant-color z-depth-5">
                                <MDBContainer fluid>
                                    <h3 className="text-light">Programming Languages</h3>
                                    <br/>
                                    <table
                                        className="table table-striped table-hover table-bordered table-dark z-depth-5">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th style={{width: "10%"}} scope="col"><strong>Language</strong></th>
                                            <th style={{width: "60%"}} scope="col">Libraries, Frameworks, And Tools Used
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Skills.createTableItem("Java", "Spring, Spark, JUint, Android", 95, 1)}
                                        {Skills.createTableItem("C++", "Qt", 80, 2)}
                                        {Skills.createTableItem("C", "N/A", 60, 3)}
                                        {Skills.createTableItem("Python", "Numpy, Pandas, PyTorch", 90, 4)}
                                        {Skills.createTableItem("SQL", "Microsoft SQL Server, MySQL, Mongoose", 75, 5)}
                                        {Skills.createTableItem("HTML", "N/A", 90, 6)}
                                        {Skills.createTableItem("CSS", "Bootstrap, Material Design", 55, 7)}
                                        {Skills.createTableItem("JS/JSX", "React, Express, Node", 85, 8)}
                                        {Skills.createTableItem("PHP", "N/A", 80, 9)}
                                        {Skills.createTableItem("Solidity", "MetaMask, Rinkeby", 65, 10)}
                                        {Skills.createTableItem("Arduino", "N/A", 80, 11)}
                                        {Skills.createTableItem("Dart", "Flutter", 25, 12)}
                                        {Skills.createTableItem("Bash", "N/A", 75, 13)}
                                        </tbody>
                                    </table>
                                </MDBContainer>
                            </MDBJumbotron>
                        </ReactWOW>
                        {/*Bonus Info*/}
                        <ReactWOW animation="slideInUp">
                            <MDBJumbotron className="elegant-color z-depth-5">
                                <h4 className="text-light"><strong>Other Tools And Concepts I'm Familiar With:</strong>
                                </h4>
                                <ul className="tools text-light">
                                    <MDBRow>
                                        <MDBCol size="6">
                                            <li>Scrum</li>
                                            <li>Maven</li>
                                            <li>Package Management Tools</li>
                                            <li>Agile Development</li>
                                            <li>Black Box Testing</li>
                                            <li>Test Driven Development</li>
                                            <li>Machine Learning</li>
                                            <li>Basic Penetration Testing</li>
                                            <li>Basic Cryptography</li>
                                            <li>JSON</li>
                                            <li>Fuzzing</li>
                                            <li>BurpSuite</li>
                                            <li>Kali</li>
                                            <li>Nessus</li>
                                            <li>Snort</li>
                                        </MDBCol>
                                        <MDBCol size="6">
                                            <li>Universal Modeling Language</li>
                                            <li>LucidChart</li>
                                            <li>Socket Layer Networking</li>
                                            <li>RESTful Web Services</li>
                                            <li>Full Stack Development</li>
                                            <li>Git</li>
                                            <li>Hyperledger</li>
                                            <li>BlockChain</li>
                                            <li>Microsoft Office</li>
                                            <li>Google Cloud Platform</li>
                                            <li>Docker</li>
                                            <li>pfSense</li>
                                            <li>WireShark</li>
                                            <li>SQLMap</li>
                                            <li>Metasploit</li>
                                        </MDBCol>
                                    </MDBRow>
                                </ul>
                            </MDBJumbotron>
                        </ReactWOW>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>)
    }
}

export default Skills