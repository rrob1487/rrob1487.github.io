import React, {Component} from "react"
import {MDBContainer, MDBCol, MDBJumbotron, MDBRow} from "mdbreact"
import ReactWOW from "react-wow"

class Skills extends Component {
    constructor(props) {
        super(props)
        this.createTableItem = this.createTableItem.bind(this)
        this.setExpBarColor = this.setExpBarColor.bind(this)
        this.createTableWrapper = this.createTableWrapper.bind(this)
    }

    //This Creates The Outer Most Table Element
    createTableWrapper(language, tools, width, index) {
        if (index % 2 === 1) {
            return (<ReactWOW animation="slideInLeft" delay={(.04 * index).toString() + "s"}>{this.createTableItem(language, tools, width)}</ReactWOW>)
        } else {
            return (<ReactWOW animation="slideInRight" delay={(.04 * index).toString() + "s"}>{this.createTableItem(language, tools, width)}</ReactWOW>)
        }

    }

    createTableItem(language, tools, width) {
        return (
            <tr>
                <th scope="row"><strong>{language}</strong></th>
                <td>{tools}</td>
                <td>
                    {this.setExpBarColor(width)}
                </td>
            </tr>
        )
    }

    setExpBarColor(width) {
        if (width > 75) {
            return (<div className="meter"><span style={{width: " " + width + "%"}}/></div>)
        } else if (width <= 75 && width >= 60) {
            return (<div className="meter orangeSpan"><span style={{width: " " + width + "%"}}></span></div>)
        } else {
            return (<div className="meter redSpan"><span style={{width: " " + width + "%"}}></span></div>)
        }
    }


    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light">Skills</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        {/*Table*/}
                        <MDBJumbotron className="elegant-color z-depth-5">
                            <MDBContainer fluid>
                                <h3 className="text-light">Programming Languages</h3>
                                <table className="table table-striped table-hover table-bordered table-dark z-depth-5">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th style={{width: "10%"}} scope="col"><strong>Language</strong></th>
                                        <th style={{width: "60%"}} scope="col">Libraries, Frameworks, And Tools Used</th>
                                        <th style={{width: "25%"}} scope="col">Experience</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.createTableWrapper("Java", "Spring, Spark, JUint, Android", 95, 1)}
                                    {this.createTableWrapper("C++", "Qt", 80, 2)}
                                    {this.createTableWrapper("C", "N/A", 60, 3)}
                                    {this.createTableWrapper("Python", "Numpy, Pandas, PyTorch", 90, 4)}
                                    {this.createTableWrapper("SQL", "Microsoft SQL Server, MySQL, Mongoose", 75, 5)}
                                    {this.createTableWrapper("HTML", "N/A", 90, 6)}
                                    {this.createTableWrapper("CSS", "Bootstrap, Material Design", 90, 7)}
                                    {this.createTableWrapper("JS/JSX", "React, Express, Node", 55, 8)}
                                    {this.createTableWrapper("PHP", "N/A", 80, 9)}
                                    {this.createTableWrapper("Solidity", "MetaMask, Rinkeby", 65, 10)}
                                    {this.createTableWrapper("Arduino", "N/A", 80, 11)}
                                    {this.createTableWrapper("Dart", "Flutter", 25, 12)}
                                    {this.createTableWrapper("Bash", "N/A", 75, 13)}
                                    </tbody>
                                </table>
                            </MDBContainer>
                        </MDBJumbotron>
                        {/*Bonus Info*/}
                        <ReactWOW animation="slideInUp">
                            <MDBJumbotron className="elegant-color z-depth-5">
                                <h4 className="text-light"><strong>Other Tools And Concepts I'm Familiar With:</strong></h4>
                                <ul className="tools text-light">
                                    <MDBRow>
                                        <MDBCol size="6">
                                            <li>Scrum</li>
                                            <li>Maven</li>
                                            <li>npm</li>
                                            <li>Yarn</li>
                                            <li>Agile Development</li>
                                            <li>Black Box Testing</li>
                                            <li>Test Driven Development</li>
                                            <li>Machine Learning</li>
                                            <li>Basic Penetration Testing</li>
                                            <li>Basic Cryptography</li>
                                            <li>JSON</li>
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