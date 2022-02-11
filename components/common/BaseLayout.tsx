import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Header from './Header';
import Loader from "./Loader";
import Navbar, { ISelectedKey } from "./Navbar";
export interface ILayoutProps  { 
  children: React.ReactNode,
  selectedKey: ISelectedKey
}
const { Sider } = Layout;

export default function BaseLayout(props: ILayoutProps) {
  const [showChild, setShowChild] = useState(false);
  
  useEffect(() => {
    setShowChild(true);
  }, []);
  
  if (!showChild) {
    return <Loader/>;
  }
  return(
    <div className='main-content'>
    <Layout>
    <Header/>
    <Layout>
    <Sider width={200} className="site-layout-background">
     <Navbar selectedKey={props.selectedKey}/>
    </Sider>
    <Layout>
      {props.children}
    </Layout>
    </Layout>
  </Layout>
  </div>
  )
}
