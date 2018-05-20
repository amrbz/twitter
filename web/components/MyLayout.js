import Header from './Header'
import Head from 'next/head'
import { Grid, Row, Col } from 'react-bootstrap';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '0px solid #DDD'
}

const Layout = (props) => (
  <div>
    <Head>
        <title>Decentralized Twitter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    </Head>
    <Grid>
      {props.children}
    </Grid>
  </div>
)

export default Layout