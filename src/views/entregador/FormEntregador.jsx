import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador () {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [foneCelular, setFoneCelular] = useState("");
    const [foneFixo, setFoneFixo] = useState("");
    const [qtdEntregas, setQtdEntregas] = useState("");
    const [valorFrete, setValorFrete] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [uf, setUf] = useState("");
    const [complemento, setComplemento] = useState("");

    function salvar() {
        let entregadorRequest = {
            nome,
            cpf,
            rg,
            dataNascimento,
            foneCelular,
            foneFixo,
            qtdEntregas,
            valorFrete,
            rua,
            numero,
            bairro,
            cidade,
            cep,
            uf,
            complemento
        };

        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then(() => {
                console.log('Entregador cadastrado com sucesso.')
            })
            .catch(() => {
                console.log('Erro ao cadastrar o entregador.')
            });
    }

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
                                    width={10}
                                    maxLength="150" 
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF' width={3}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG' width={3}>
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
                                    width={4}
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
                                    width={4}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'
                                    width={4}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={2}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cep'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='UF'
                                    width={2}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Ativo:</label>
                                <Form.Radio
                                    label='Sim'
                                    name='ativo'
                                    value="S"
                                    checked={ativo === "S"}
                                    onChange={() => setAtivo("S")}
                                 />
                             <Form.Radio
                                label='Não'
                                name='ativo'
                                value="N"
                                checked={ativo === "N"}
                                onChange={() => setAtivo("N")}
                             />
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
