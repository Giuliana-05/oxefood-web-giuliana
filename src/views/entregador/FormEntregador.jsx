import InputMask from 'comigo-tech-react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuSistema from '../../MenuSistema';
import axios from 'axios';

export default function FormEntregador () {
   const [nome, setNome]=useState();
   const [cpf, setCpf]=useState();
   const [rg, setRg]=useState();
   const [dataNascimento, setDataNascimento]=useState();
   const [foneCelular, setFoneCelular]=useState();
   const [foneFixo, setFoneFixo]=useState();
   const [qtdEntregas, setQtdEntregas]=useState();
   const [valorFrete, setValorFrete]=useState();
   const [rua, setRua]=useState();
   const [numero, setNumero]=useState();
   const [bairro, setBairro]=useState();
   const [cidade, setCidade]=useState();
   const [cep, setCep]=useState();
   const [uf, setUf]=useState();
   const [complemento, setComplemento]=useState();
   const [ativo, setAtivo]=useState();

function salvar() {

		let entregadorRequest = {
		     nome,
		     cpf,
             rg,
		     dataNascimento,
		     foneCelular,
		     foneFixo,
             qtdEntregas: qtdEntregas ? Number(qtdEntregas) : 0,
    valorFrete: valorFrete ? Number(valorFrete) : 0,
             rua,
             numero,
             bairro,
             cidade,
             cep,
             uf,
             complemento
		};
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um entregador.')
		});
	}

    return (

        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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
                                    label='CPF'
                                    width={8}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
				                        onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='rg'
                                    width={8}>
                                    <InputMask
                                        required
                                        mask="99.999.999-9"
                                        value={rg}
				                        onChange={e => setRg(e.target.value)}
                                    /> 
                                </Form.Input>
                            </Form.Group>
                            

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='DT nascimento'
                                    width={5}
                                    placeholder="Ex: 20/03/1985"
                                    value={dataNascimento}
				                    onChange={e => setDataNascimento(e.target.value)}>
                                    
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={7}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
				                        onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={7}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
				                        onChange={e => setFoneFixo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                type="number"
                                    fluid
                                    label='QTD entregas realizadas'
                                    width={5}
                                    value={qtdEntregas}
				                        onChange={e => setQtdEntregas(e.target.value)}
                                >
                                    
                                </Form.Input>


                                <Form.Input
                                type="number"
                                    fluid
                                    label='Valor por frete'
                                    width={5}
                                    value={valorFrete}
				                        onChange={e => setValorFrete(e.target.value)}
                                >
                                    
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Rua'
                                    width={15}
                                    value={rua}
				                        onChange={e => setRua(e.target.value)}
                                    >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={5}
                                    value={numero}
				                        onChange={e => setNumero(e.target.value)}
                                    >
                                    
                                </Form.Input>
                                </Form.Group>


                                <Form.Group>

                                <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={10}
                                        value={bairro}
				                        onChange={e => setBairro(e.target.value)}
                                        >
                                        
                                    </Form.Input>

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
                                        label='CEP'
                                        width={5}
                                        value={cep}
				                        onChange={e => setCep(e.target.value)}
                                        >
                                        
                                    </Form.Input>
                                    </Form.Group>

                                    <Form.Group>
        <Form.Field width={16}  
         placeholder="Ex: 20/03/1985"  
         value={uf}
		onChange={e => setUf(e.target.value)} >
          <label>UF</label>
          <select name="uf">
            <option value="">Selecione </option>
            <option value="AC">RO</option>
            <option value="AL">AC</option>
            <option value="AP">AM</option>
            <option value="AP">RR</option>
            <option value="AP">PA</option>
            <option value="AP">AP</option>
            <option value="AP">TO</option>
            <option value="AP">MA</option>
            <option value="AP">PI</option>
            <option value="AP">CE</option>
            <option value="AP">RN</option>
            <option value="AP">PB</option>
            <option value="AP">PE</option>
            <option value="AP">AL</option>
            <option value="AP">SE</option>
            <option value="AP">BA</option>
            <option value="AP">MG</option>
            <option value="AP">ES</option>
            <option value="AP">RJ</option>
            <option value="AP">SP</option>
            <option value="AP">PR</option>
            <option value="AP">SC</option>
            <option value="AP">RS</option>
            <option value="AP">MS</option>
            <option value="AP">MT</option>
            <option value="AP">GO</option>
            <option value="AP">DF</option>

          </select>

        </Form.Field>
      </Form.Group>


      <Form.Group>
      <Form.Input
              fluid
              label='Complemento'
              width={16} 
              value={complemento}
			onChange={e => setComplemento(e.target.value)}>
                                        
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
                            <Link to={'/list-entregador'}>
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