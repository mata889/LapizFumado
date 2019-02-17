import React, { Component } from 'react';


import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";


const Home = () =>  {
    
        return (
            <div>
                <MDBContainer>
                    <h4 className="mt-5 mb-2">Una Compañia Hecha Para Los Inovadores</h4>
                    <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-200" src="https://www.thinknpc.org/wp-content/uploads/2018/08/jay-clark-508185-unsplash-e1535122367277-1000x360.jpg" alt="First slide" />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive" color="Black">Lapices de Calidad ,Traidos de Versailles,Francia</h3>
                                    <p>Los Mejores en el Mundo</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-" src="http://mocc.pnca.edu/images/uploads/meow-1000x360-new.jpg" alt="Second slide" />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Artistas Famosos los Usan</h3>
                                    <p>"Una Calidad incomparable"-Anonimo</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img className="d-block w-200" src="http://error-design.com/malammar/wp-content/uploads/COVER-1000x360.jpg" alt="Third slide" />
                                    <MDBMask overlay="black-slight" />
                                </MDBView>
                                <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Una Precision Astral</h3>
                                    <p>Lapices que hasta los mismo dioses estarian Celosos....</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        )
    }
    export default Home;