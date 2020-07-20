
import React from 'react'
import { Form,Input, Button,Icon } from 'antd';
function login(props){
        const { getFieldDecorator } = props.form;
        const handleSubmit = (e)=>{
            e.preventDefault();
            props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            });
        }
        return(
            <div style={{width:'400px',paddingTop:'100px',margin:'0 auto'}}>
                    <Form onSubmit={ (e)=>{handleSubmit(e)}} className="login-form">
                        <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )}
                        </Form.Item>
                        <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           登录
                        </Button>
                    </Form>
                </div>
        )
    
}

export default Form.create()(login)













