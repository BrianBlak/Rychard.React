import React from "react";
const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan= "5">Quantida de livros na tabela: {props.qdLivros}</td>         
        </tr>
    </tfoot>
);


export default TabelaFoot;