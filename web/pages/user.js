// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const moment = require('moment');

// import englishLocaleData from 'react-intl/locale-data/en';
// import { IntlProvide } from 'react-intl';
import axios from 'axios';
import { Row, Col, Modal, Button, Badge, Alert, FormGroup, FormControl, ControlLabel, Table, Panel, Glyphicon } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);     
      this.addTweet = this.addTweet.bind(this);
      this.retweet = this.retweet.bind(this);
      this.changeUser = this.changeUser.bind(this);

      this.state = {
        userId: props.url.query.userId,
        visitorId: props.url.query.userId,
        user: false,
        txPending: false,
        tweets: {
          list: false,
        },
        users: {
          list: false
        },
        message: '',
      };
    }

    async componentDidMount() {

      axios.all([
        axios.get(`http://127.0.0.1:7610/api/v1.0/users`, {
        }),
        axios.get(`http://127.0.0.1:7610/api/v1.0/users/${this.state.userId}`, {
        }),
        axios.get(`http://127.0.0.1:7610/api/v1.0/tweets/${this.state.userId}`, {
        })
      ])
      .then(axios.spread((usersRes, userRes, tweetsRes) => {
        console.log('usersRes', usersRes);
        console.log('userRes', userRes);
        console.log('tweetsRes', tweetsRes);
        
        this.setState({
          user: userRes.data,
          users: {
            list: usersRes.status === 204 ? [] : usersRes.data
          },
          tweets: {
            list: tweetsRes.status === 204 ? [] : tweetsRes.data
          }
        })

      }));
    }
    
    addTweet() {
      this.setState({
        txPending: true,
      })
      const req = axios.post('http://127.0.0.1:7610/api/v1.0/tweets', {
        message: this.state.message,
        userId: this.state.userId,
        retweetId: null
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          
          const arr = this.state.tweets.list === false && this.state.tweets.length === 0 ? 
            [response.data] : [response.data].concat(this.state.tweets.list);
          
          this.setState({
            tweets: {
              list: arr
            },
            message: '',
            txPending: false,
          })
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }

    retweet(e) {
      const retweetId = e.target.dataset.retweetid

      console.log('INIT RETWEET', retweetId);
      

      const req = axios.post('http://127.0.0.1:7610/api/v1.0/tweets', {
        userId: this.state.visitorId,
        retweetId: retweetId
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          
          // const arr = this.state.tweets.list === false && this.state.tweets.length === 0 ? 
          //   [response.data] : [response.data].concat(this.state.tweets.list);
          
          this.setState({
            // tweets: {
            //   list: arr
            // },
            // message: '',
            retweetId: null,
          })
        }
      })
      .catch((e) => {
        console.error(e);
      });
      
    }

    changeUser(e) {
      this.setState({
        visitorId: e.target.dataset.visitorid
      })
    }
    
    render() {

      
      const users = this.state.users.list === false ? null : (
        this.state.users.list.map((item, index) => (
          <Button 
            key={`user_${index}`}
            bsStyle={this.state.visitorId === item.id ? 'success' : 'default'} 
            style={{ marginRight: 10 }}
            onClick={this.changeUser}
            data-visitorid={item.id}
          >
            {item.userName}
          </Button>
        ))
      )

      const isAdmin = this.state.userId === this.state.visitorId;

      return (
          <Layout>
            <Row>
              <Col lg={4}>
                <h1>{this.state.user === false ? '-' : this.state.user.userName}</h1>
                
                <p>{users}</p>
              
              </Col>
              <Col lg={8}>
                <h2>Tweets</h2>
                {
                  isAdmin ? (
                    <div>
                      <FormGroup controlId="formInlineName">
                        <FormControl 
                          componentClass="textarea" 
                          value={this.state.message} 
                          placeholder="Anything to say?"
                          onChange={(e) => this.setState({message: e.target.value})}
                        />
                      </FormGroup>
                      <Button 
                        bsStyle="primary" 
                        onClick={this.addTweet}
                        disabled={this.state.txPending}
                      >
                        Add record
                      </Button>
                    </div>
                  ) : null
                }
                
                <hr />
                {
                  this.state.tweets.list === false ? null : 
                    this.state.tweets.list.length === 0 ? (
                      <Alert key={`tweets_no_contetnt`}>
                        No records
                      </Alert>
                    ) : (
                      this.state.tweets.list.map((item, index) => {
                        const day = moment.unix(item.created);
                        return (
                          <Panel key={`tweet_${index}`}>
                            <Panel.Heading>Posted {day.fromNow()} {item.retweetedFrom ? <b>Retweeted from {item.retweetedFrom.userName}</b> : null}</Panel.Heading>
                            <Panel.Body>{item.message}</Panel.Body>
                            <Panel.Footer>
                              <span className={'glyphClass'}>
                                <Glyphicon glyph="heart-empty" style={{ marginRight: '5px'}} />
                                
                              </span>
                              {
                                isAdmin ? null : (
                                  <span className={'glyphClass'}>
                                    <Glyphicon 
                                      glyph="retweet" 
                                      style={{ marginRight: '5px'}} 
                                      onClick={this.retweet} 
                                      data-retweetid={item.id}
                                    />
                                   
                                  </span>
                                )
                              }
                            </Panel.Footer>
                          </Panel>
                        )
                      })
                    )
                    
                }
              </Col>
            </Row>
            <style jsx>{`
              @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
              font-family: 'IBM Plex Sans', sans-serif;

              h1 {
                font-size: 4em;
                font-weight: 300;
                margin: 1.4em 0 0.4em 0;
                display: block;
                border-radius: 4px;
              }

              h2 {
                font-size: 2em;
                font-weight: 300;
                margin: 3.4em 0 1em 0;
              }

              span.glyphClass {
                cursor: pointer;
                margin-right: 2em;
              }
            `}</style>
          </Layout>
      )
    }
}

