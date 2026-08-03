import styled from "styled-components";


export const Container2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height:100vh;
    flex-direction: column;
    background-color: 	#2f4f4fe8;
`
export const Title2 = styled.header`
    width: 100vw; 
    height:150px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    

h1{
    color: azure;
    font-family: "Outfit", sans-serif;
    font-size: 60px;
    font-weight: bold ;
}
`
export const SmallContainer = styled.section`
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:55%;
    height:65%;
    margin-top: 100px;
    background-color: RGBA( 240, 248, 255, 0.8 );
    box-shadow: 4px 4px 10px;
    
    
`

export const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 90%;
    height: 170px;
    margin-top: 10px;
    

.exhibition{
    display: flex;
    padding:5px;
    width: 25%;
    height: 65%;
    background-color: #7270702f;
    box-shadow: 1px 1px 10px gray;
    border-radius: 10px;
    font-family: "Outfit", sans-serif;
    font-size: 20px;

}
` 
export const Conversion = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100px;
    gap: 12px;
    margin-bottom: 10px;

    .field{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 65px;
    position: relative;
    right: -40px;
    
    label{
        font-size: 20px;
        font-family: "Outfit", sans-serif;
    }
    input{
         height: 100%;
         border-radius: 10px;
         border: none;
         font-family:"Outfit", sans-serif;
         font-size: 15px;
    }

    select{
        height: 100%;
        border-radius:5px;
        border: none;
        font-family:"Outfit", sans-serif;
        font-size: 20px;
    }
    button{
        width: 100px;
        height: 100%;
        border-radius:10px;
        margin-top: 25px;
        border: none;
        font-family:"Outfit", sans-serif;
        font-size: 20px;
    }

}
`

export const Record = styled.table`

width: 80%;
height: 35%;
gap:10px;
border-radius: 30px;
box-shadow: 2px 2px 10px ;
tr{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
}
th{
    font-weight: bold;
    font-family: "Outfit", sans-serif;
    font-size: 20px;
    
}
`
