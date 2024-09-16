import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produtos: [],
};

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
    adicionarProdutos: (state, action) => {
      // Desestrutura o payload
    const produto = action.payload;

      // Verifica se o produto é válido
    if (!produto || !produto.id) {
        console.warn("Produto inválido ou sem ID.");
        return;
    }

      // Verifica se o produto já está no carrinho
    const produtoJaNoCarrinho = state.produtos.some(
        (p) => p.id === produto.id
    );

        if (produtoJaNoCarrinho) {
        // Atualiza a quantidade se o produto já está no carrinho
        state.produtos = state.produtos.map((p) =>
        p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
        } else {
        // Adiciona o produto ao carrinho com quantidade inicial de 1
        state.produtos = [...state.produtos, { ...produto, quantidade: 1 }];
        }
    },
    incrementarProduto: (state, action) => {
      state.produtos = state.produtos.map((produto) => produto.id === action.payload ? {...produto, quantidade: produto.quantidade + 1} : produto)
    },
    DecrementarProduto: (state, action) => {
      state.produtos = state.produtos.map((produto) => produto.id === action.payload ? {...produto, quantidade: produto.quantidade - 1} : produto).filter((produto) => produto.quantidade > 0)
    },
    RemoverProduto: (state, action) => {
      state.produtos = state.produtos.filter((produto) => produto.id !== action.payload)
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const produto = state.produtos.find(produto => produto.id === id)
      if (produto) {
        produto.quantity = quantity;
      }
    }
},
});

export const { adicionarProdutos, incrementarProduto, DecrementarProduto, RemoverProduto } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
