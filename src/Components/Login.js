import React,{ useState } from 'react'
import { Card, Container,Form } from 'react-bootstrap'
import axios from 'axios'
function Login(props) {
    const [ value1, setValue1] = useState('')
    const [ value2, setValue2] = useState('')
    const {Img,backColor,Logo,brand,brandColor,label1,label2,btnColor,loginUrl} = props

    const Submit = () => {
        axios.post(loginUrl,{email:value1,password:value2})
        .then(res => {
            alert(res.data.message)
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })
    }
    return (
        <div style={{height:'100vh',backgroundImage:`url(${Img})`,backgroundSize:'cover',backgroundColor:backColor}}>
            <Container className="d-flex justify-content-center align-items-center" style={{height:'98vh'}}>
                <Card style={{width:'400px',minWidth:'300px',height:'600px',border:'1px solid green'}}>
                    {/* Logo Section */}
                    <div style={{height:"100px",display:'flex',alignItems:'center',justifyContent:'center'}}>
                        {Logo !== undefined? <img src={Logo} width="100px" height="100px" alt="Missing"/> :''}
                    </div>
                    <div style={{height:"50px",display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <h3 style={{fontWeight:'bolder',color:brandColor}}>{brand}</h3>
                    </div>
                    {/* Input Section */}
                    <div style={{padding:'20px'}}>
                        <Form.Group>
                            <Form.Label>{label1}</Form.Label>
                            <Form.Control placeholder={props.label1} type="text" value={value1} onChange={(e)=>setValue1(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{label2}</Form.Label>
                            <Form.Control placeholder={props.label2} type="password" value={value2} onChange={(e)=>setValue2(e.target.value)}/>
                        </Form.Group>
                    </div>
                    <div style={{width:"100%",padding:"20px",paddingLeft:'50px',paddingRight:'50px'}}>
                        <button className="btn btn-primary" style={{width:"100%",height:"40px",backgroundColor:btnColor}} onClick={Submit}>Login</button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Login
