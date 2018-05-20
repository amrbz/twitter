import Layout from '../components/MyLayout.js';
// import Header from '../components/Header.js'
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const layoutStyle = {
  margin: '2em 6em',
  padding: 20,
  border: '0px solid #DDD'
}

export default class extends React.Component {

  constructor(props) {
    super(props);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleOk = this.handleOk.bind(this);
    this.state = {
      
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

  render() {
    return(
      <Layout>
        <h1>L2.js</h1>
        <h2>
          Offchain protocol for any blockchain out there
        </h2>
        <p>
          <Link href="/stream">
            <Button bsSize="large" bsStyle="primary">Video Stream demo</Button>
          </Link>
        </p>
        
        
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
          font-family: 'Open Sans', sans-serif;
          color: #333;

          h1 {
            font-size: 6em;
            font-weight: 400;
            margin: 1em 0 1.4em 0 ;
          }

          h2 {
            font-size: 4em;
            font-weight: 300;
            margin-bottom: 1em;
          }
          
        `}</style>
      </Layout>
    )
  }
}