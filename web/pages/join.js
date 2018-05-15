// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Row, Col, Modal, Button, Alert, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.createUser = this.createUser.bind(this);
      this.state = {
        visible: false,
        txPending: false,
        users: {
          list: false
        },
        userName: '',
      };
    }

    async componentDidMount() {
      const res = await axios.get('http://127.0.0.1:7610/api/v1.0/users');
      // console.log(res);
      this.setState({ 
        users: {
          list: res.status === 204 ? [] : res.data
        } 
      });
    }

    toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
      })
    }

    createUser(e) {
      this.setState({
        txPending: true,
      })
      const req = axios.post('http://127.0.0.1:7610/api/v1.0/users', {
        userName: this.state.userName,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          
          const arr = this.state.users.list === false && this.state.issues.users.length === 0 ? 
            [response.data] : [response.data].concat(this.state.users.list);
          
          this.setState({
            users: {
              list: arr
            },
            visible: false,
            txPending: false,
          })
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }

    render() {
      return (
        <Layout>
          <Row>
            <Col>
              <h1>Join</h1>
              <h2>Users</h2>
            </Col>
          </Row>
          <Row>
            <Col>
            {
              this.state.users.list === false ? (<Alert>Loading...</Alert>) :
                this.state.users.list.length === 0 ? (<Alert>No users</Alert>) :
                  (
                    <Table>
                      <thead>
                        <tr>
                          <th>User name</th>
                          <th>Address</th>
                          <th>Tx ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.users.list.map((item, index) => (
                            <tr key={`issue_${index}`}>
                              <td>
                                <Link href={`/user?userId=${item.id}`}>
                                  <a>{item.userName}</a>
                                </Link>
                              </td>
                              <td>{item.address}</td>
                              <td>
                                <Link href={`https://wavesexplorer.com/tx/${item.txid}`}>
                                  <a target="_blank">{item.txid}</a>
                                </Link>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  )
            }
            
            </Col>
          </Row>
          <Row>
            <Col>
              <Button bsStyle="primary" onClick={this.toggleModal}>
                Add user
              </Button>
            </Col>
          </Row>
          
          <Modal show={this.state.visible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>New user</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup controlId="formInlineName">
                <ControlLabel>User name</ControlLabel>{' '}
                <FormControl 
                  type="text" 
                  value={this.state.userName} 
                  placeholder="Enter user name"
                  onChange={(e) => this.setState({userName: e.target.value})}
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
              <Button 
                bsStyle="primary" 
                onClick={this.createUser}
                disabled={this.state.txPending}
              >
                Create account
              </Button>
            </Modal.Footer>
          </Modal>

          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
            font-family: 'IBM Plex Sans', sans-serif;

            h1 {
                font-size: 4em;
                font-weight: 300;
                margin: 1.4em 0;
                display: block;
                border-radius: 4px;
            }

            h2 {
                font-weight: 300;
            }
          `}</style>
        </Layout>
      )
    }
}

