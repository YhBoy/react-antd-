import React , { Fragment } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown ,Avatar, message} from 'antd';
import '../../App.css'
import { adminRoutes } from '../../routes/index'
import { withRouter } from 'react-router-dom'
import './index.css'
const route = adminRoutes.filter(route=> route.isShow)
const { Header, Content,  Sider } = Layout;
// import {clearToken} from '../../utils/auth'
const { SubMenu } = Menu;

function Index(props){
    const popMenu = (
        <Menu onClick = {(p)=>{
              if( p.key === 'logOut' ){
                  props.history.push('/login')
              }else{
                  message.info(p.key)
              }
          }}>
            <Menu.Item key='noti'>通知中心</Menu.Item>
            <Menu.Item key='setting'>设置</Menu.Item>
            <Menu.Item key='logOut'>退出</Menu.Item>
        </Menu>
    )

    const renderSubMenu = (item)=>{
        return (
            <SubMenu key={item.key}  title={item.title}>
                {
                    item.children&& item.children.map((data)=>{
                        return (
                            data.children && data.children.length > 0 ? renderSubMenu(data) : renderMenu(data)
                        )
                    })
                }
            </SubMenu>
        )
    }
    const renderMenu = (item)=>{
        return <Menu.Item key={ item.path } >  { item.title }</Menu.Item>
    }

    return(
        <div>
            <Layout>
    <Header className="header">
      <div className="logo" style={{color:'#fff'}}>
            这里是logo
      </div>  
      <Dropdown overlay = { popMenu }>
          <div style={{color:'#fff'}}>
              <span ><Avatar style={{marginRight:'10px'}} icon="user" />超级管理员</span>
              <Icon type='down' />
          </div>
      </Dropdown>
      
    </Header>
    <Content style={{ padding: '0 10px' }}>
      
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
                {
                    route.map((item)=>{
                           return item.children&&item.children.length > 0 ? renderSubMenu(item) : renderMenu(item)
                    })
                }
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {props.children}
        </Content>
      </Layout>
      
    </Content>
  </Layout>
        </div>
    )
}

export default withRouter(Index)









