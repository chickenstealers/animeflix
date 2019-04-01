import React, { Component } from 'react'
import { Container, Text, Row, Button, LogoImage } from '../../components/StyledComponents'
import Logo from '../../resources/logo/logo-red.png';

export default class Main extends Component {
    render() {
      return (
        <div>
            <Container>
                <Row>
                    <LogoImage src={Logo} width={250} />
                    <Button large>Entrar</Button>
                </Row>

                <Container>
                    <Text verylarge centered>Streaming de Anime ilimitado na sua TV, telefone, tablet e etc.</Text>
                    <Text large centered>Assista onde estiver. Cancele a qualquer momento.</Text>
                    
                    <Row padded centered>
                        <Button large>SEJA PREMIUM POR 30 DIAS</Button>
                    </Row>
                </Container>
            </Container>
        </div>
      )
    }
}