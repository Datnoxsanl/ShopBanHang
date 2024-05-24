
import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header } = Layout;
 function HeaderComponents(){
    const items = [{
        key: 'home',
        label: <h1>Home</h1>
    }, {
        key: 'contact',
        label: <h1>Contact</h1>
    }]
    return (
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
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