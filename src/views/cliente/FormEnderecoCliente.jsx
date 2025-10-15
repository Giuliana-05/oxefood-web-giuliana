
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import MenuSistema from '../../MenuSistema';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEnderecoCliente () {

    const { state } = useLocation();
    const [idEnderecoCliente, setIdEnderecoCliente] = useState();


   const [rua, setRua] = useState();
   const [numero, setNumero] = useState();
   const [bairro, setBairro] = useState();
   const [cep, setCep] = useState();
   const [cidade, setCidade] = useState();
   const [estado, setEstado] = useState();
   const [complemento, setComplemento] = useState();


   useEffect(() => {
            if (state != null && state.id != null) {
                axios.get("http://localhost:8080/api/cliente/endereco" + state.id)
                .then((response) => {
                               setIdEnderecoCliente(response.data.id)
                               setRua(response.data.rua)
                               setCep(response.data.cep)
                               setNumero(response.data.numero)
                               setBairro(response.data.bairro)
                               setCidade(response.data.cidade)
                               setEstado(response.data.estado)
                               setComplemento(response.data.complemento)
                })
            }
    }, [state])


   function salvar() {

        let enderecoClienteRequest = {
             rua: rua,
             cep: cep,
             numero: numero,
             bairro: bairro,
             cidade: cidade,
             estado: estado,
             complemento: complemento
        }
    
         if (idEnderecoCliente != null) { //Alteração:
           axios.put("http://localhost:8080/api/cliente/endereco" + idEnderecoCliente, enderecoClienteRequest)
           .then((response) => { console.log('Endereço alterado com sucesso.') })
           .catch((error) => { console.log('Erro ao alterar um endereço.') })
           } else { //Cadastro:
           axios.post("http://localhost:8080/api/cliente/endereco", enderecoClienteRequest)
           .then((response) => { console.log('Endereço alterado com sucesso.') })
           .catch((error) => { console.log('Erro ao alterar endereço do cliente.') })
       }

    }


    return (

        <div>

         <MenuSistema tela={'enderecoCliente'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

{ idEnderecoCliente != undefined &&
    <h2> <span style={{color: 'darkgray'}}>Endereco Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cep'>
                                    required
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}>
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={6}>
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}
                                </Form.Input>

                                   <Form.Input
                                    fluid
                                    label='Numero'
                                    width={6}>
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                </Form.Input>

                                   <Form.Input
                                    fluid
                                    label='Estado'
                                    width={6}>
                                    value={estado}
                                    onChange={e => setEstado(e.target.value)}

                                 
                                </Form.Input>

                                   <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={6}> 
                                    value={complemento}
                                    onChange={e => setComplemento(e.target.value)}

                                </Form.Input>


                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-cliente'}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='pink'
                            >
                                <Icon name='reply' />
                                Salvar Alteração
                            </Button>
                            </Link>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
