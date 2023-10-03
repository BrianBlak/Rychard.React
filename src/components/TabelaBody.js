import React from "react";
const TabelaBody = (props) => (
    // <tbody>
    //     <tr>
    //         <td>978-85-7522-632-2</td>
    //         <td>CSS Grid Layout</td>
    //         <td>Maurício Samy Silva</td>
    //         <td>
    //             <button className="botao remover">Remover</button>
    //         </td>
    //     </tr>
    // </tbody>
    <tbody>
        {props.livros.map((livro, index) => (
            <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.preco}</td>
                <td>
                    <button className="botao remover"
                        onClick={() => props.removerLinha(livro.id)}>Remover</button>
                </td>
            </tr>
        ))
    }
    </tbody>
);


export default TabelaBody;