
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
 function HeaderComponents(){
    const items = [{
        key: 'home',
        label: <h1>Trang Chủ</h1>
    }, {
        key: 'profile',
        label: <h1>Profile</h1>
    }]
    return (
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          width:'100%'
        }}
      >
        <Link><img src="" alt="" /></Link>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    
    )
}

export default HeaderComponents;