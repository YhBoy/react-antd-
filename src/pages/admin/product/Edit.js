import React from 'react'
import { Card,Form,Input, Button } from 'antd';

function Edit (props){
    const { getFieldDecorator } = props.form;
    const priceValidator = (rule,value,callback)=>{
            if( value*1 >10 ){
                   callback('价格不能大于10') 
            }else{
                callback()
            }
    }
    const  check = () => {
        props.form.validateFields(err => {
          if (!err) {
            console.info('success');
          }else{
              console.log('报错啦')
          }
        });
      };
    return (
        <Card title='商品编辑'>
                <Form >
                    <Form.Item label='名字'> 
                            {getFieldDecorator('username',{
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your name',
                                    },
                             ],
                        })(<Input placeholder='请输入商品名字'></Input> )}
                        
                    </Form.Item>
                    <Form.Item label='价格'> 
                            {getFieldDecorator('price',{
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your price',
                                    },
                                    {
                                        validator:priceValidator
                                    }
                             ],
                        })(<Input placeholder='请输入价格'></Input> )}
                        
                    </Form.Item>
                    <Form.Item>
                        <Button onClick= { (e)=>{ check(e) }  }  type='primary'>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
        </Card>
    )
}


export default Form.create()(Edit);