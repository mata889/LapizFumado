import React from 'react';
import { Card,  CardTitle,  Container, Row, Col,CardImg } from 'reactstrap';
import {lapices} from './lapices.json'
import Display from './Display'
import firebase from 'firebase'


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          lapices,
          Temp: [],
          nombre: null,
          imagen: null,
          data: null,
          UID: null
        }
    }

    componentWillMount = ()=>{
        const nameref = firebase.database().ref('lapices')
        nameref.on('value',(snapshot)=>{
            var scores=snapshot.val()
            var keys = Object.keys(scores)
            var array =[]
            for(var i=0 ;i<keys.length;i++){
                var k=keys[i]
                var a=scores[k].Title
                var b=scores[k].Price
                var c=scores[k].Descripcion
                var d=scores[k].imagen 
                var arr = {
                    "Title":a,
                    "Price":b,
                    "Descripcion":c,
                    "imagen":d
                }
                array.push(arr)
                /*console.log(array)*/
            }
            this.setState({Temp: array})
        })
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({nombre: user.displayName})
        this.setState({imagen: user.photoURL})
        this.setState({data: user.providerData})
        this.setState({UID: user.uid})
      })
    }

    render(){
        const lapices = this.state.Temp.map((lapices,i) => {       
            return (
              lapices.uid === this.state.UID ?
              <div className="row mt-4">   
               <Display precio={lapices.Price} description={lapices.Descripcion} name={lapices.Title} imagen={lapices.imagen}></Display>
              </div>
              : ""
            )
          })
          
        return (
            <div >
              <Container>
                <Row>
                    <Col xs="auto" sm="4" >
                        <Container>
                        <div className="row mt-4">        
                            <Card body>
                                <CardImg src={this.state.imagen}></CardImg>
                                <br></br>
                                <CardTitle><h3>{this.state.Title}</h3></CardTitle>
                               
                            </Card>
                        </div>    
                        </Container>
                    </Col>
                    <Col>
                      {lapices}           
                    </Col>
                </Row>   
              </Container>
                 
            </div>
          );
    }
}

export default Profile;
