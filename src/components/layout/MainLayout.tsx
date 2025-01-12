
import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: "111",
        label: 'Dashboard'
    },
    {
        key: "10111",
        label: 'Profile'
    },
    {
        key: "0111",
        label: 'User Management',
        children: [
            {
                key: "1213211",
                label: 'Create Admin'
            },
            {
                key: "10111552",
                label: 'Create Student'
            },
        ]
    },
]

const MainLayout: React.FC = () => {


    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{color: 'white', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Ph Uni</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <h1>The main content should be there</h1>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;