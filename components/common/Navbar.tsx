import { Menu } from "antd";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link href={'/'}><a>Users</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href={'/post'}><a>Posts</a></Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link href={'/comments'}><a>Comments</a></Link>
        </Menu.Item>
      </Menu>
    </>
  );
}