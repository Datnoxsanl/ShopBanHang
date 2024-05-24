import React from 'react';
import { Layout } from 'antd';
const { Footer} = Layout;

export default function FooterComponents(){
    return (
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    )
}