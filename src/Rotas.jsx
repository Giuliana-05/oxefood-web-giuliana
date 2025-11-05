import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import { ProtectedRoute } from './views/util/ProtectedRoute';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import ListCidade from './views/estado/ListCidade';
import FormCidade from './views/estado/FormCidade';
import ListEntregador from './views/entregador/ListEntregador';
import FormEnderecoCliente from './views/cliente/FormEnderecoCliente';
import FormLogin from './views/login/FormLogin';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />
                <Route path="/" element={<ProtectedRoute>
                <Home/> </ProtectedRoute>} />
                <Route path="list-cliente" element={<ProtectedRoute> <ListCliente/> </ProtectedRoute>} />
                <Route path="list-entregador" element={<ProtectedRoute> <ListEntregador/> </ProtectedRoute>
} />
                <Route path="list-produto" element={<ProtectedRoute> <ListProduto/> </ProtectedRoute>
} />
                <Route path="list-cidade" element={ <ListCidade/> } />
                <Route path="form-cliente" element={<ProtectedRoute>  <FormCliente/> </ProtectedRoute>
} />
                <Route path="form-enderecoCliente" element={<ProtectedRoute> <FormEnderecoCliente/> </ProtectedRoute>
} />
                <Route path="form-produto" element={<ProtectedRoute> <FormProduto/> </ProtectedRoute>
} />
                <Route path="form-cidade" element={<ProtectedRoute> <FormCidade/> </ProtectedRoute>
} />
                <Route path="form-entregador" element={<ProtectedRoute> <FormEntregador/> </ProtectedRoute>
 } />
            </Routes>
        </>
    )
}

export default Rotas
