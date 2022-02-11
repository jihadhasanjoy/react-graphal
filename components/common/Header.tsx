import { Layout, Menu } from "antd";
import Link from "next/link";
import React from "react";
const { Header } = Layout;

export default function HeaderComponent() {
  return (
    <Header className="header customer-header">
      <div className="logo">React GraphQL</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link href={'/'}><a>CRUD</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link href={'/blank'}><a>Blank</a></Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}