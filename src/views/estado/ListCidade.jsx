import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCidade () {

   const [lista, setLista] = useState([]);
   const [openModal, setOpenModal] = useState(false);
   const [idRemover, setIdRemover] = useState();


   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8080/api/cidade")
       .then((response) => {
           setLista(response.data)
       })
   }

    function formatarData(dataParam) {

       if (dataParam === null || dataParam === '' || dataParam === undefined) {
           return ''
       }

       let arrayData = dataParam.split('-');
       return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
   }

   function confirmaRemover(id) {
       setOpenModal(true)
       setIdRemover(id)
   }

   async function remover() {

       await axios.delete('http://localhost:8080/api/cidade/' + idRemover)
       .then((response) => {
 
           console.log('Cidade removido com sucesso.')
 
           axios.get("http://localhost:8080/api/cidade")
           .then((response) => {
               setLista(response.data)
           })
       })
       .catch((error) => {
           console.log('Erro ao remover cidade.')
       })
       setOpenModal(false)
   }


   return(
       <div>
           <MenuSistema tela={'cidade'} />
           <div style={{marginTop: '3%'}}>

               <Container textAlign='justified' >

                   <h2> Cidade </h2>
                   <Divider />

                   <div style={{marginTop: '4%'}}>
                       <Button
                           label='Novo'
                           circular
                           color='orange'
                           icon='clipboard outline'
                           floated='right'
                           as={Link}
                           to='/form-cidade'
                       />
                        <br/><br/><br/>
                  
                       <Table color='orange' sortable celled>

                           <Table.Header>
                               <Table.Row>
                                   <Table.HeaderCell>Nome</Table.HeaderCell>
                                   <Table.HeaderCell>Estado</Table.HeaderCell>
                                   <Table.HeaderCell>É capital</Table.HeaderCell>
                                   <Table.HeaderCell>Quantidade da população</Table.HeaderCell>
                                   <Table.HeaderCell>Data de fundação</Table.HeaderCell>
                                   <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                               </Table.Row>
                           </Table.Header>
                      
                           <Table.Body>

                               { lista.map(cidade => (

                                   <Table.Row key={cidade.id}>
                                       <Table.Cell>{cidade.nome}</Table.Cell>
                                       <Table.Cell>{cidade.estado}</Table.Cell>
                                       <Table.Cell>{formatarData(cidade.dataFundacao)}</Table.Cell>
                                       <Table.Cell>{cidade.ehCapital}</Table.Cell>
                                       <Table.Cell>{cidade.qtdPopulacao}</Table.Cell>
                                       <Table.Cell textAlign='center'>

                                           <Button
                                               inverted
                                               circular
                                               color='green'
                                               title='Clique aqui para editar os dados da cidade'
                                               icon>
                                                <Link to="/form-cidade" state={{id: cidade.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                           </Button> &nbsp;
                                           
                                            <Button
                                               inverted
                                               circular
                                               color='red'
                                               title='Clique aqui para remover esta cidade'
                                               icon
                                                onClick={e => confirmaRemover(cidade.id)}>
                                                   <Icon name='trash' />
                                           </Button>


                                       </Table.Cell>
                                   </Table.Row>
                               ))}

                           </Table.Body>
                       </Table>
                   </div>
               </Container>
           </div>
           <Modal
                          basic
                          onClose={() => setOpenModal(false)}
                          onOpen={() => setOpenModal(true)}
                          open={openModal}
                    >
                          <Header icon>
                              <Icon name='trash' />
                              <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro da cidade? </div>
                          </Header>
                          <Modal.Actions>
                              <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                                  <Icon name='remove' /> Não
                              </Button>
                              <Button color='green' inverted onClick={() => remover()}>
                                  <Icon name='checkmark' /> Sim
                              </Button>
                          </Modal.Actions>
                    </Modal>
       </div>
   )
}




