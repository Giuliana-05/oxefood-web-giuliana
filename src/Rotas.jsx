import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import ListCidade from './views/estado/ListCidade';
import FormCidade from './views/estado/FormCidade';
import ListEntregador from './views/entregador/ListEntregador';
import FormEnderecoCliente from './views/cliente/FormEnderecoCliente';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-cidade" element={ <ListCidade/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-enderecoCliente" element={ <FormEnderecoCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-cidade" element={ <FormCidade/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
