import { Container, Card, BoxRight, BoxLeft, Register1, Sing_Up, Login1, Login_in, Questions, Button, SmallBoxes, Title, Efeito } from "./styles"
import { useState } from "react"
import FundoVerde from "../../assets/EfeitoVerde.jpeg"


function Login() {
    const [mode, setMode] = useState ("login")  //mudou aqui
    return (
        <Container>
            <Card>


                {/* -----------------------------------CARD DA DIREITA------------------------------- */}
                <BoxLeft>

                    {/* ==========================================================================================================*/}
                    <Login1 className={mode ==="login" ? "active" : ""} >
    

                        <Title >Fazer Login</Title>

                        <Questions>
                            <SmallBoxes type="text" placeholder="E-mail" />
                            <SmallBoxes type="password" placeholder="Senha" />
                            <Button type="submit">Entrar</Button>
                        </Questions>
                    </Login1>
                    {/* ==========================================================================================================*/}
                    <Login_in className={mode === "signup" ? "active": ""}>

                        <Title>Já tem <br /> uma conta?</Title>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum eius aut, enim omnis blanditiis ipsum laborum? Id fugit rem ullam distinctio deleniti qui iure esse nostrum. Saepe, consectetur praesentium.</p>
                        <Button onClick={() => setMode("login")}>Faça Login</Button>
                    </Login_in>

                    {/* ==========================================================================================================*/}
                </BoxLeft>
                {/* -----------------------------------CARD DA DIREITA------------------------------- */}

                <Efeito className={mode}>
                    <img src={FundoVerde} />
                </Efeito>
                {/* -----------------------------------CARD DA ESQUERDA------------------------------- */}
                <BoxRight>

                    {/* ==========================================================================================================*/}
                    
                    <Register1 className={mode === "signup" ? "active" : ""} >

                        <Title>Cadastro</Title>
                        <Questions>
                            <SmallBoxes type="text" placeholder="Nome:" />
                            <SmallBoxes type="email" placeholder="E-mail" />
                            <SmallBoxes type="password" placeholder="Senha:" />
                            <SmallBoxes type="text" placeholder="Confirme a sua senha :" />
                            <Button type="submit"> Cadastrar </Button>
                        </Questions>
                    </Register1>

                    {/* ==========================================================================================================*/}

                    <Sing_Up className={mode === "login" ? "active" : ""}>

                        <Title >Não tem <br /> uma conta ?</Title>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam fugiat laudantium saepe enim, iste, esse vero aliquid veniam dolorem amet incidunt cupiditate quas laboriosam cum aspernatur non beatae sunt!</p>

                        <Button onClick={() => setMode("signup")}>
                            Cadastre-se
                        </Button>

                    </Sing_Up>

                    {/* ==========================================================================================================*/}
                </BoxRight>
                {/* -----------------------------------CARD DA ESQUERDA------------------------------- */}
            </Card>
        </Container>

    )

}
export default Login