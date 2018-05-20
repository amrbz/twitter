import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import { Row, Col, Button, Image, Jumbotron } from 'react-bootstrap';

import YouTube from 'react-youtube';


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.onVideoReady = this.onVideoReady.bind(this);
    this.openStream = this.openStream.bind(this);
    this.addFunds = this.addFunds.bind(this);
    this.state = {
      currency: 'ETH',
      price: 0.01,
      isStreaming: false,
      balance: 0.14
    };
  }

  async componentDidMount() {
    // const res = await axios.get('http://127.0.0.1:7200/api/v1.0/issues');
    // console.log(res);
    // this.setState({ 
    //   issues: {
    //     list: res.status === 204 ? [] : res.data
    //   } 
    // });
  }
  // 

  onVideoReady(event) {
    // event.target.pauseVideo();
  }

  openStream() {
    console.log('open');
    
    this.setState({
      isStreaming: true,
      // balance: Math.round((this.state.balance + this.state.price) * 100) / 100
    })

    const ths = this
    let downloadTimer = setInterval(() => {
      ths.setState({
        balance: Math.round((ths.state.balance - ths.state.price) * 100) / 100
      })

      if(ths.state.balance <= 0) {
        ths.setState({
          isStreaming: false
        })
        clearInterval(downloadTimer)
      }
    },1000);
  }

  closeStream() {
    this.setState({
      isStreaming: false
    })
  }


  addFunds() {
    this.setState({
      balance: Math.round((this.state.balance + 0.07) * 100)/100
    })
  }

  render() {
    const videoOpts = {
      height: '400',
      width: '90%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return(
      <Layout>
        <Row style={{ paddingTop: 120}}>
          <Col lg={8}>
            {
              this.state.isStreaming === true ? (
                <YouTube
                  videoId="tekErV6FwdE"
                  opts={videoOpts}
                  onReady={this.onVideoReady}
                />
              ) : (
                <Jumbotron>
                  <h1>Please donate</h1>
                  <p>
                    To be able to join video stream you have to open a payment channel.
                  </p>
                  <p>
                    <Button bsStyle="primary" onClick={this.openStream}>Open channel</Button>
                  </p>
                </Jumbotron>
              )
            } 
          </Col>
          <Col lg={4}>

            <h2>Balance: {this.state.balance} {this.state.currency}</h2>
            <h2>Price: {this.state.price} {this.state.currency}/sec</h2>
            <Button 
              bsStyle="primary"
              bsSize="large"
              onClick={this.addFunds}
            >
              Add funds
            </Button>
          </Col>
        </Row>
          
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
          font-family: 'Open Sans', sans-serif;
          color: #333;

          h2 {
            font-weight: 300;
            margin: 0 0 1em;
          }
          
        `}</style>
      </Layout>
    )
  }
}