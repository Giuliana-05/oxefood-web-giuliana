import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}>Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="150" 
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={15}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'
                                    width={15}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={7}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={7}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cep'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='UF'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={15}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

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
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
