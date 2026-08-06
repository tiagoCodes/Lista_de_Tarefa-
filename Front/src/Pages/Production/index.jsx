import { Title2, Box1, Conversion, Record, Container2, SmallContainer } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
import trash from "../../assets/trash.svg"
import { useState } from "react"
import { useEffect } from "react"
import SetaCima from "../../assets/SetaCima.png"
import SetaBaixo from "../../assets/SetaBaixo.png"


function Production() {
    const [transactions, setTransations] = useState([]);
    const [descriptions, setDescription] = useState("");
    const [values, setValues] = useState("")
    const [typesIcon, setTypesIcon] = useState("Selecione...")

    const addTransaction = () => {
        if (!descriptions || !values || !typesIcon) return;
        setTransations([...transactions, { descriptions, values, typesIcon }]);   //  As  ...  copia os objetos do array  transactions, para que não da para alterar diretamente com .push,e {description} iserio o novo valor 

        setDescription("")              //retorna para vazio                          
        setTypesIcon("")
        setValues("")
    }
    const exclude = (index) => {
        const newTransactions = transactions.filter((element, i) => i !== index);
        setTransations(newTransactions)
    }


    return (

        <Container2>
            <SmallContainer>
                <Title2><h1>Controle seu financeiro</h1></Title2>
                <Box1>
                    <div className="exhibition">Entrada R$ <br />00,00</div>
                    <div className="exhibition">Saida R$<br /> 00,00</div>
                    <div className="exhibition"> Total R$<br /> 00,00</div>

                </Box1>

                <Conversion>
                    <div className="field">
                        <label>Descrição</label>
                        <input type="text" placeholder="Ex: Blusa" value={descriptions} onChange={(e) => setDescription(e.target.value)} />    {/* toda vez que o usuário digita, o estado description é atualizado com o novo valor. */}  {/* a sintaxe padrão é ( onChange={(e) => uma função(e.target.value)})*/}
                    </div>

                    <div className="field">
                        <label>Valor</label>
                        <input type="text" placeholder="Ex: 100,00" value={values} onChange={(e) => setValues(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Tipo</label>
                        <select value={typesIcon} onChange={(e) => setTypesIcon(e.target.value)}>
                            <option value="">Selecione...</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Saida">Saida</option>
                        </select>
                    </div>

                    <div className="field">
                        <button type="button" onClick={addTransaction}>Incluir</button>
                    </div>
                </Conversion>

                
                <Record>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Tipo</th>
                            <th>Apagar</th>
                        </tr>{/*<tr> cria uma linha e <th> cria uma célula de título (nesse caso, "Descrição"). */}
                    </thead>

                    <tbody>
                        {transactions.map((use, index) => (
                            <tr key={index}>
                                <td className="Description">{use.descriptions}</td>
                                <td className="Value">{use.values}</td>
                                <td>
                                    {use.typesIcon === "Entrada"
                                    ? <img src={SetaCima} className="Seta" />
                                    : <img src={SetaBaixo} className="Seta" />}
                                </td>
                                <td>
                                    <img src={trash} onClick={() => exclude(index)} className="exclude" />
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Record>
            </SmallContainer>

        </Container2>


    )

}
export default Production