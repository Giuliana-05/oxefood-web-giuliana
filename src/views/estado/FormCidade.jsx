import InputMask from 'comigo-tech-react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';
import axios from 'axios';

export default function FormCidade () {

    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

   const [nome, setNome]=useState();
   const [estado, setEstado]=useState();
   const [qtdPopulacao, setQtdPopulacao]=useState();
   const [ehCapital, setEhCapital]=useState();
   const [dataFundacao, setDataFundacao]=useState();
   
  

   useEffect(() => {
                if (state != null && state.id != null) {
                    axios.get("http://localhost:8080/api/cidade/" + state.id)
                   .then((response) => {
                                   setIdCidade(response.data.id)
                                   setNome(response.data.nome)
                                   setEstado(response.data.estado)
                                   setQtdPopulacao(response.data.qtdPopulacao)
                                   setCidade(response.data.cidade)
                                   setEhCapital(response.data.ehCapital)
                                   setDataFundacao(response.data.dataFundacao)
                    })
                }
        }, [state])

        function formatarData(dataParam) {

       if (dataParam === null || dataParam === '' || dataParam === undefined) {
           return ''
       }

       let arrayData = dataParam.split('-');
       return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
   }


function salvar() {

        let cidadeRequest = {
             nome,
             estado,
             qtdPopulacao,
             dataFundacao,
             ehCapital,
             cidade
        };
    
        if (idCidade != null) { 
           axios.put("http://localhost:8080/api/cidade/" + idCidade, cidadeRequest)
           .then((response) => { console.log('Cidade alterada com sucesso.') })
           .catch((error) => { console.log('Erro ao alterar uma cidade.') })
           } else { //Cadastro:
           axios.post("http://localhost:8080/api/cidade", cidadeRequest)
           .then((response) => { console.log('Cidade cadastrado com sucesso.') })
           .catch((error) => { console.log('Erro ao incluir cidade.') })
       }
    }

    return (

        <div>
            <MenuSistema tela={'cidade'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cidade &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                            
                    { idEntregador != undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Cidade &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }
                    

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={15}
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='QtdPopulacao'
                                    width={8}>
                                    <InputMask
                                        value={qtdPopulacao}
                                        onChange={e => setQtdPopulacao(e.target.value)}
                                    /> 
                                </Form.Input>
                            </Form.Group>
                            

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='dataFundacao'
                                    width={5}
                                    placeholder="Ex: 20/03/1985"
                                    value={dataFundacao}
                                    onChange={e => setDataFundacao(e.target.value)}>
                                    
                                </Form.Input>

                            </Form.Group>

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        width={10}
                                        value={cidade}
                                        onChange={e => setCidade(e.target.value)}
                                        >
                                        
                                    </Form.Input>

                                       <Form.Input
                                        fluid
                                        label='Estado'
                                        width={10}
                                        value={estado}
                                        onChange={e => setEstado(e.target.value)}
                                        >
                                        
                                    </Form.Input>

                                            
                                        </Form.Group>

                        <Form.Group>
                                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>E capital:</label>
                                <Form.Radio
                                    label='Sim'
                                    name='ehCapital'
                                    value="S"
                                    checked={ehCapital === "S"}
                                    onChange={() => setEhCapital("S")}
                                 />
                             <Form.Radio
                                label='Não'
                                name='ehCapital'
                                value="N"
                                checked={ehCapital === "N"}
                                onChange={() => setEhCapital("N")}
                             />
                        </Form.Group>
  



                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                            <Link to={'/list-cidade'}>
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