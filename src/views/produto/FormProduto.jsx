
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function FormProduto () {

   const [titulo, setTitulo]=useState();
   const [codigoProduto, setCodigoProduto]=useState();
   const [descricao, setDescricao]=useState();
   const [valorUnitario, setValorUnitario]=useState();
   const [tempoEntregaMin, setTempoEntregaMin]=useState();
   const [tempoEntregaMax, setTempoEntregaMax]=useState();


function salvar() {

		let produtoRequest = {
		     titulo,
		     codigoProduto,
             descricao,
		     valorUnitario,
		     tempoEntregaMin,
		     tempoEntregaMax
		};
	
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o produto.')
		});
	}




    return (

        <div>
             <MenuSistema tela={'produto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

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