import { Form, Input, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    // const [password,setPassword] = useState();
    const navigate = useNavigate();
    const {id,token} = useParams();

    const handleSubmit = async (values)=>{
        try {
            const res = await axios.post(`/api/v1/user/reset-password/${id}/${token}`, values);
            // window.location.reload();
            // dispatch(hideLoading());
            if (res.data.success) {
            //   localStorage.setItem("token", res.data.token);
            //   message.success("Login Successfully");
              navigate("/login");
            } else {
              message.error(res.data.message);
            }
          } catch (error) {
            // dispatch(hideLoading());
            console.log(error);
            message.error("something went wrong");
          }
        
    }
    return (
        <div className='register-page'>
            <Form
            
                name="login"
                layout="vertical"
                onFinish={handleSubmit}
                className="register-form"
            >
                <h3 className="text-center loginhead">Reset Password</h3>

                <Form.Item label="New Password" name="password">
                    <Input type="password" required />
                </Form.Item>
                
                <button className="btn btn-primary" type="submit" >
                    Update
                </button>
            </Form>

        </div>
    )
}

export default ResetPassword
