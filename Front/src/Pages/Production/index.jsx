import { Title2, Box1, Conversion, Record, Container2, SmallContainer } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
import trash from "../../assets/trash.svg"


function Production() {
    return (

        <Container2>
            <SmallContainer>
                <Title2><h1>Controle seu financeiro</h1></Title2>
                <Box1>
                    <div className="exhibition">Entrada R$ <br /> Valor</div>
                    <div className="exhibition">Saida R$<br /> Valor</div>
                    <div className="exhibition"> Total R$<br /> Valor</div>
                </Box1>

                <Conversion>
                    <div className="field">
                        <label>Descrição</label>
                        <input type="text" placeholder="Ex: Blusa" />
                    </div>

                    <div className="field">
                        <label>Valor</label>
                        <input type="text" placeholder="Ex: 100,00" />
                    </div>

                    <div className="field">
                        <label>Tipo</label>
                        <select>
                            <option value="">Entrada</option>
                            <option value="">Saída</option>
                        </select>
                    </div>

                    <div className="field">
                        <button>Incluir</button>
                    </div>
                </Conversion>


                <Record>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Tipo</th>
                            <th><img src={trash} /></th>
                        </tr>
                    </thead>
                </Record>
            </SmallContainer>

        </Container2>


    )

}
export default Production