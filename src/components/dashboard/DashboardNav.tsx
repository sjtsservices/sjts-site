/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { type PropsWithChildren, useState } from 'react';
import {
  DashboardOutlined, FormOutlined, MenuOutlined, ReconciliationOutlined,
} from '@ant-design/icons';
import { Button, Drawer, type MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import UserAvatar from './UserAvatar';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '/admin', <DashboardOutlined />),
  getItem('Jobs', '/admin/jobs', <ReconciliationOutlined />),
  getItem('Enquiry', '/admin/enquiry', <FormOutlined />),
  //   getItem('Clients', '/dashboard/clients', <BuildOutlined />),
  //   getItem('Contacts', '/dashboard/contacts', <ContactsOutlined />),
  //   getItem('Projects', '/dashboard/projects', <FolderOpenOutlined />),
  //   getItem('Settings', '/dashboard/settings', <SettingOutlined />),
];

const DashboardNav: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleOnMenuItemClick = (key: any) => {
    void router.push(key)
  }

  const getSelectedKeys = () => {
    const urlArray = router.asPath.split('/');
    const res = urlArray.map(vl => {
      if (vl === 'admin') {
        return '/'
      }
      return vl;
    });
    // console.log("Res:: ", res)
    return [router.asPath]
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className='hidden md:block' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='text-xl font-semibold text-white p-3 flex justify-center'><Link className='text-white relative block w-full h-full' href={'/'}>
          <Image src={'/assets/logo/sjts-log.png'} alt="logo" width={50} height={50} />
        </Link></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} selectedKeys={getSelectedKeys()} mode="inline" items={items} onClick={(e) => handleOnMenuItemClick(e.key)} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer, height: 'auto' }}>
          <div className="flex justify-between md:justify-end items-center px-5 py-3">
            <Button className='md:hidden' onClick={() => setOpen(true)} icon={<MenuOutlined />}></Button>
            <Link href={'/'} className='block md:hidden'>
              <Image className='block md:hidden' src={'/assets/logo/sjts-log.png'} alt="logo" width={80} height={25} />
            </Link>
            <UserAvatar />
          </div>
        </Header>
        <Content style={{ margin: '0 16px', padding: '10px' }}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>SJTS Private Limited</Footer>
      </Layout>

      <Drawer className='block md:hidden
      ' onClose={() => setOpen(false)} open={open}>
        <Menu defaultSelectedKeys={['1']} selectedKeys={getSelectedKeys()} mode="inline" items={items} onClick={(e) => handleOnMenuItemClick(e.key)} />
      </Drawer>
    </Layout>
  );
};

export default DashboardNav;