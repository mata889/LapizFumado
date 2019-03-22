import React from 'react'
import { Card, Button, CardTitle, CardText, Col,CardBody,} from 'reactstrap';

class Display extends React.Component{

   

    render(){
        return(
            <Col xs="auto" sm="12">
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.Title}</CardTitle>
                        <CardText>{this.props.Descripcion}</CardText>
                        <CardText>${this.props.Price}</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col> 

        )
    }


}

export default Display