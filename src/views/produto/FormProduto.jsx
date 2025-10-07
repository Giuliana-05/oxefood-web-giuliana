
import React, {useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';


export default function FormProduto () {

    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

   const [titulo, setTitulo]=useState();
   const [codigoProduto, setCodigoProduto]=useState();
   const [descricao, setDescricao]=useState();
   const [valorUnitario, setValorUnitario]=useState();
   const [tempoEntregaMin, setTempoEntregaMin]=useState();
   const [tempoEntregaMax, setTempoEntregaMax]=useState();
   const [listaCategoria, setListaCategoria] = useState([]);
   const [idCategoria, setIdCategoria] = useState();


   useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/produto/" + state.id)
                .then((response) => {
               	    	       setIdProduto(response.data.id)
               	    	       setTitulo(response.data.titulo)
               	    	       setCodigoProduto(response.data.codigoProduto)
               	    	       setDescricao(response.data.descricao)
               	    	       setValorUnitario(response.data.valorUnitario)
               	    	       setTempoEntregaMin(response.data.tempoEntregaMin)
                               setTempoEntregaMax(response.data.tempoEntregaMax)
                               setIdCategoria(response.data.categoria.id)

           		})
       		}

             axios.get("http://localhost:8080/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

   	}, [state])


function salvar() {

		let produtoRequest = {
            idCategoria: idCategoria,
		     titulo,
		     codigoProduto,
             descricao,
		     valorUnitario,
		     tempoEntregaMin,
		     tempoEntregaMax
		};
	
		 if (idProduto != null) { //Alteração:
           axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
           .then((response) => { console.log('Produto alterado com sucesso.') })
           .catch((error) => { console.log('Erro ao alter um produto.') })
           } else { //Cadastro:
           axios.post("http://localhost:8080/api/produto", produtoRequest)
           .then((response) => { console.log('Produto cadastrado com sucesso.') })
           .catch((error) => { console.log('Erro ao incluir o produto.') })
       }
	}




    return (

        <div>
             <MenuSistema tela={'produto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                     { idProduto === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                                }
                    { idProduto != undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }
                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    required
                                    fluid
                                    tabIndex='3'
                                    placeholder='Selecione'
                                    label='Categoria'
                                    options={listaCategoria}
                                    value={idCategoria}
                                    onChange={(e,{value}) => {
                                        setIdCategoria(value)
                                    }}
                                />


                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder="Informe o título do produto"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    placeholder="Informe o código do produto"
                                    value={codigoProduto}
			                        onChange={e => setCodigoProduto(e.target.value)}>
                                   
                                </Form.Input>



                            </Form.Group>


                            <Form.Input
                                    fluid
                                    label='Descrição'
                                    width={50}
                                    maxLength="500"
                                    placeholder="Informe a descrição do produto"
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}>

                                    
                                    
                                    
                                </Form.Input>
                            <Form.Group>


                            <Form.Input
                                    fluid
                                    label='Valor unitário'
                                    width={6}
                                    value={valorUnitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                   >
                                    
                                </Form.Input>
                                

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega mínimo em minutos'
                                    width={6}
                                    placeholder="30"
                                    value={tempoEntregaMin}
			                        onChange={e => setTempoEntregaMin(e.target.value)}>
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega máximo em minutos'
                                    width={6}
                                    placeholder="40"
                                    value={tempoEntregaMax}
			                        onChange={e => setTempoEntregaMax(e.target.value)}>
                                    
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                            <Link to={'/list-produto'}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                            </Link>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}