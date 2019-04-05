import React from 'react'
import {Container, LogoImage, Row, Text} from '../../components/StyledComponents'
import Logo from '../../resources/logo/logo-red.png';

class Login extends React.Component {
    render() {
      return (
        <div>
            <Container>
                <Row>
                    <LogoImage src={Logo} width={250} />
                </Row>
                <Container centeredForm>
                    <Text>Hello Fellas</Text>
                </Container>
            </Container>
        </div>
      )
    }
}

export default Login