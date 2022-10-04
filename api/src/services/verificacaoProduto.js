


    
    export function VerificarInformacoesProduto(produto) {
    if(!produto.categoria || produto.categoria === "") {
        throw new Error('Categoria Obrigatório!')
    }
    else if(!produto.marca_produto || produto.marca_produto === "") {
        throw new Error('A marca do Obrigatório!')
    }
    else if (!produto.nome || produto.nome === "") {
        throw new Error('Nome Obrigatório!')
    }
    else if (!produto.preco || produto.preco === "") {
        throw new Error('Preco Obrigatório!')
    }
    else if (!produto.informacoes || produto.informacoes === "") {
        throw new Error('As informações do produto é obrigatório!')
    }
}