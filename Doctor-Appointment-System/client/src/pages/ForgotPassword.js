import { Form, Input, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    // const [email,setEmail] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (values)=>{
        try {
            const res = await axios.post("/api/v1/user/forgot-password", values);
            // window.location.reload();
            // dispatch(hideLoading());
            if (res.data.success) {
            //   localStorage.setItem("token", res.data.token);
            //   message.success("Login Successfully");
              navigate("/reset-password");
            } else {
              message.error(res.data.message);
            }
          } catch (error) {
            // dispatch(hideLoading());
            console.log(error);
            message.error("something went wrong");
          }
        // e.preventDefault();
        // axios.post("/api/v1/user/forgot-password",{email})
        // .then(res=>{
        //     if(res.data.Status === "Success"){
        //         navigate('/login')
        //     }
        // }).catch(err=> console.log(err))
    }
    return (
        <div className='register-page'>
            <Form
            
                name="login"
                layout="vertical"
                onFinish={handleSubmit}
                className="register-form"
            >
                <h3 className="text-center loginhead">Forgot Password</h3>

                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                {/* <Form.Item label="Password" name="password">
                    <Input type="password" required />
                </Form.Item> */}
                {/* <Link to="/register" className="m-2">
                    Not a user Register here
                </Link> */}
                {/* <Link to="/forgot-password">Forgot-Password</Link> */}
                <button className="btn btn-primary" type="submit" >
                    Send
                </button>
            </Form>

        </div>
    )
}

export default ForgotPassword;
