import { Button,  Form, Input } from 'antd';
import React, { useState } from 'react';
import './App.css'
import { login,register } from './laf-api/user';

const App: React.FC = () => {
  const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const loginHandler = async () => {
    const res = await login(username, password)
    console.log(res);
  }
  const registerHandler = async () => {
    const res = await register(username, password)
    console.log(res);
  }
  return (
    <div className='main'>
      <h1 style={{textAlign: 'center'}}>laf注册登录案例</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={username} onChange={e=>setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={ password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={()=>loginHandler()}>
            登录
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" htmlType="submit" onClick={()=>registerHandler()}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
