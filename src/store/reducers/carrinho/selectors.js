import { createSelector } from '@reduxjs/toolkit';

const selectEstadoCarrinho = state => state.carrinho;

export const selectProdutoPrecoTotal = createSelector(
    [selectEstadoCarrinho],
    estadocarrinho => {
        return estadocarrinho.produtos.reduce((acc, produto) => {
            const preco = Number(produto.preco) || 0;
            const quantidade = Number(produto.quantity) || produto.quantidade;
            return acc + preco * quantidade;
        }, 0);
    }
);