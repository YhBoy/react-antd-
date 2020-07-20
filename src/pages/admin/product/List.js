import React from 'react'
import {Table, Card, Button, Popconfirm } from 'antd'


function List(props){
    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: '操作',
            render(h) {
                return (
                    <div>
                        <Button type='primary'>修改</Button> 
                        <Popconfirm title="是否删除此项?"
                            onConfirm = { ()=>{
                                console.log('确认删除')
                            } }
                            onCancel= {()=>{
                            console.log('取消删除')
                            }}>
                            <Button style={{marginLeft:'20px'}} type='danger'>删除</Button> 
                        </Popconfirm>
                    </div>
                )
            },
          },
      ];
    return (
        <Card title='商品列表' 
                extra = { 
                <Button type='primary'
                 size='small' 
                 onClick={ ()=>{props.history.push('/admin/product/edit')} }>新增</Button> }>
                <Table dataSource={dataSource} columns={columns} />
        </Card>
    )
}

export default List;



