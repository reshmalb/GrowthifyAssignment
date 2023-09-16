import Spinner from 'react-bootstrap/Spinner';

function SpinnerBar({website}) {
  return <>
      <h1 style={{color:'white',marginTop:"10px"}}>  We are analysing  the website   " {website}" </h1> 
      <Spinner animation="border" variant="light" />;
       </> 
}

export default SpinnerBar;