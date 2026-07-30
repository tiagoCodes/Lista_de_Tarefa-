import styled from 'styled-components'

export const Container = styled.section`
    background-color: 	#242222;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Card = styled.div`
    width: 80%;
    height: 90vh;
    border-radius: 32px;
    background-color: rgba(255 255 255 / .2);
    display: flex;
    justify-content: center;
    align-items: center;    
    padding:32px, 20px;
    position: relative;
    overflow:hidden;
    
`

export const Button = styled.button`
    border-radius: 12px;
    padding: 12px 20px;
    border: none;
    outline: none;
    margin-top: 10px;
    width: 35vw;
    cursor: pointer;
    transition:0.5s;

    &:hover{
        transform: translateY(-5px)
    }
    
`

export const Title = styled.h2`
    margin-bottom: 32px;
    font-size: 60px;
    text-align: center;
    color: azure;
    font-weight: 700; 
`


//====================================CARD DA DIREITA=============================================
export const BoxLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;                 //DIV PAI===================
    align-items: center;
    justify-content: center;
    flex-direction: column;
`



export const Login1 = styled.form`
//Fazer Login
    display: flex;
    flex-direction:column;
    justify-content: center;        //PRINCIPAL=============
    align-items: center;
    position: absolute;
    z-index: 1;
    opacity: 0; //  mudou 
    pointer-events: none;     //  mudou 
    transition: opacity 0.5s ease;         //  mudou 

    &.active {  // mudou
        opacity: 1;
        pointer-events: auto;
    }

        ${Title}{
            color: azure; 
        }
`



export const Login_in = styled.div`
// Já tem conta ?
 
    display: flex;
    flex-direction:column;
    justify-content: center;       //SECUNDARIO============
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;  // mudou 

    &.active{  // mudou 
        opacity:1;
        pointer-events: auto;
        z-index: 1;
    }
    p{

        margin-bottom: 32px;
        width: 35vw;
        color: rgba(0 0 0 /.8); 
    }

    ${Title}{
    color: rgba(0 0 0 /.8); 
    }

    ${Button}{
    background-color: rgba(225 225 225 /.2);
    border: solid 2px rgba(0 0 0 /.8);
    }

`
//====================================CARD DA DIREITA=============================================




//====================================CARD DA ESQUERDA=============================================
export const BoxRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;                      //DIV PAI==========================
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`



export const Register1 = styled.div`
 // Fazer Cadastro
    display: flex;
    flex-direction:column;
    justify-content: center;        //SECUNDARIO=====================
    align-items: center;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;  //  mudou

  &.active {   //mudou
    opacity: 1;
    pointer-events: auto;
  }

`

export const Sing_Up = styled.div`
 // Não tem conta ?
    display: flex;
    flex-direction:column;
    justify-content: center;       //PRINCIPAL====================
    align-items: center;
    z-index: 1;
    opacity: 0;    //mudou
    pointer-events: none;    //mudou
    transition: opacity 0.5s ease;    //mudou

    &.active {    //mudou
        opacity: 1;     //mudou
        pointer-events: auto;     //mudou
    }

    p{
        margin-bottom: 32px;
        width: 35vw;
        color: rgba(0 0 0 /.8); 
    }

    ${Title}{
      color: rgba(0 0 0 /.8); 
    }

    ${Button}{
        background-color: rgba(225 225 225 /.2);
        border: solid 2px rgba(0 0 0 /.8);
    }


`



export const Questions = styled.form`    
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:16px;
    width: 90%;
    
    ${Button}{
        background: linear-gradient(269deg,rgba(0, 0, 0, 0.81) 0%, rgba(15, 121, 9, 0.87) 51%, rgba(30, 255, 0, 0.82) 100%);
        font-weight: 700; 
        color: rgba(0 0 0 /.8) 
    }
`


export const SmallBoxes = styled.input`
    border-radius: 12px;
    padding: 12px 20px;
    border: none;
    width: 35vw;
    background-color: rgba(225 225 225 / .2);
    color: rgba(225 225 225 / .9);
    
    &::placeholder{
        color: rgba(225 225 225 / .5);
    }

`
//====================================CARD DA ESQUERDA=============================================


export const Efeito = styled.div`
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
    transition: transform 0.8s ease;


    &.login {
        transform: translateX(50%);
    }

    &.signup {
        transform: translateX(-50%);
    }

    img{
        width:100%;
        height:100%
    }



`

