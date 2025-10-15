
import React, {useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../../views/util/Util';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';


export default function FormCategoriaProduto () {

    const { state } = useLocation();
    const [idCategroiaProduto, setIdCategoriaProduto] = useState();


   const [descricao, setDescricao]=useState();
   const [listaCategoria, setListaCategoria] = useState([]);
   const [idCategoria, setIdCategoria] = useState();


   useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/categoriaProduto/" + state.id)
                .then((response) => {
               	    	       setDescricao(response.data.descricao)
           		})
       		}

             axios.get("http://localhost:8080/api/categoriaProduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

   	}, [state])


function salvar() {

		let categoriaProdutoRequest = {
            idCategoria: idCategoria,
		     titulo,
		     codigoProduto,
             descricao,
		     valorUnitario,
		     tempoEntregaMin,
		     tempoEntregaMax
		};
	
		 if (idCategroiaProduto != null) { //Alteração:
           axios.put("http://localhost:8080/api/categoriaProduto/" + idCategroiaProduto, categoriaProdutoRequest)
           .then((response) => { console.log('Produto cadastrado na categoria com sucesso.') })
           .catch((error) => { console.log('Erro cadastrar produto na categoria.') })
           } else { //Cadastro:
           axios.post("http://localhost:8080/api/categoriaProduto", categoriaProdutoRequest)
           .then((response) => {
                    notifySuccess('Produto cadastrado na categoria com sucesso .')
                    })
           .catch((error) => {
                    if (error.response.data.errors != undefined) {
       		                for (let i = 0; i < error.response.data.errors.length; i++) {
	       		                    notifyError(error.response.data.errors[i].defaultMessage)
	    	                }
	                    } else {
		                    notifyError(error.response.data.message)
	}
           })
       }
	}

    return (

        <div>
             <MenuSistema tela={'categoriaProduto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                     { idCategroiaProduto === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                                }
                    { idCategroiaProduto != undefined &&
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



                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                            <Link to={'/list-categoriaProduto'}>

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