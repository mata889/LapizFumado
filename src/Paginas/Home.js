import React from 'react';




import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Container } from 'react-bootstrap';
var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAjWK7IticvF90SZaHBsUhnixrMNt2714o",
    authDomain: "pen-900.firebaseapp.com",
    databaseURL: "https://pen-900.firebaseio.com",
    projectId: "pen-900",
    storageBucket: "pen-900.appspot.com",
};
firebase.initializeApp(config);
var db=firebase.database();
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={img:""}
    }
    componentDidMount(){
        db.ref().child('pictures/').on('value', (snapshot)=> {
            let carousel_1 = snapshot.exportVal().carousel_1
            console.log(carousel_1)
            this.setState({img:carousel_1})
        }); 
    }
    
    render() {
        
        
        return (
            
            <Container>
                <MDBContainer>
                    <h4 className="mt-5 mb-2">Una Compañia Hecha Para Los Inovadores</h4>
                    <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-200" src={this.state.img} alt="First slide" />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive" color="Black">Lapices de Calidad ,Traidos de Versailles,Francia</h3>
                                    <p>Los Mejores en el Mundo</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-200" src={require("./meow.jpg")} alt="Second slide" sizes="100%" />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Artistas Famosos los Usan</h3>
                                    <p>"Una Calidad incomparable"-Anonimo</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img className="d-block w-200" src={require("./cover.jpg")} alt="Third slide" />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Una Precision Astral</h3>
                                    <p>Lapices que hasta los mismo dioses quisieran....</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                        </MDBCarouselInner>
                    </MDBCarousel>
                    
                </MDBContainer>

                <MDBRow>
                    <MDBCol>
                        <MDBCard className="card-image" style={{
                            backgroundImage:("./essential.jpg")
                        }}>
                            <div className="text-white text-center d-flex align-items-center rgba-green-strong py-5 px-4">
                                <div>
                                    <h5 className="orange-text">
                                        <MDBIcon icon="pen" /> Quienes Somos</h5>
                                    <MDBCardTitle tag="h3" className="pt-2">
                                        <strong>Compañia Socialmente Responsable Con los Utiles </strong>
                                    </MDBCardTitle>
                                    <p>
                                        Nosotros somos una empresa que esta motivada<br></br> a vender lapices y llevarlos a sus hogares,<br></br>
                                         para que tengan una experiencia inigualable.<br></br>No importa donde esten ,
                                         donde se encuentre,<br></br>nosotros estaremos para su servicio.
                                        </p>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className="card-image" style={{
                            backgroundImage:
                                "url('https://cdn.evoke.ie/2016/03/10060740/porn-1.jpg')"
                        }}>
                            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                                <div>
                                    <h5 className="yellow-text">
                                        <MDBIcon icon="desktop" /> Amigable Con La Tecnologia</h5>
                                    <MDBCardTitle tag="h3" className="pt-2">
                                        <strong>Encuentranos en todas las plataformas</strong>
                                    </MDBCardTitle>
                                    <p>
                                       Nuestra Empresa esta inclinida a la Tecnologia y no solo eso, tenemos aliados en todo el mundo.</p>
                                    <MDBBtn color="deep-orange" href="http://zimsdesign.surge.sh/">
                                        <MDBIcon icon="clone left"  /> Nuestro Aliado Principal</MDBBtn>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </Container>
        )
    }
}
export default Home;