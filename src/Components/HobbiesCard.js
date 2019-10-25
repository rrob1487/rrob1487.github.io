import React, {Component} from "react"
import {
    MDBCol,
    MDBJumbotron,
    MDBRow
} from "mdbreact"
import ReactWOW from "react-wow"

class HobbiesCard extends Component {
    constructor(props) {
        super(props)
        HobbiesCard.createAnimation = HobbiesCard.createAnimation.bind(this)
    }

    static createAnimation(index) {
        if (index % 2 === 1) {
            return "fadeInLeft"
        }
        return "fadeInRight"
    }


    render() {
        return (
            <ReactWOW animation={HobbiesCard.createAnimation(this.props.index)}
                      delay={(this.props.index / 3).toString() + "s"}>
                <MDBRow center>
                    <MDBCol md='8'>
                        <MDBJumbotron className="elegant-color z-depth-5">
                            <MDBRow center>
                                <MDBCol md="8">
                                    <h2 className="text-light">{this.props.title}</h2>
                                    <img src={this.props.picture} alt={this.props.title}
                                         className="img-fluid z-depth-3"/>
                                    <br/><br/>
                                    <p className="text-light">
                                        {this.props.description}
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </ReactWOW>
        )
    }
}


export default HobbiesCard