import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { NavLinkProps } from './Navlink';

type MenuItem = Required<MenuProps>['items'][number];
type LinkItem = {
  label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
}

export type MobileNavProps = {
    navLinks: NavLinkProps[]
    onChange?: (url: string) => void
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  function toMenuItem(nalinkProps: NavLinkProps[]): MenuProps['items']{
    const out = nalinkProps.map(val => {
      return getItem(
        val.lable,
        val.href,
        undefined,
        val.childLinks ? toMenuItem(val.childLinks) : undefined
      );
    });
    return out;
  }


  const items: MenuProps['items'] = [
    getItem('Home', '/'),
    getItem('About Us', '/about'),
    getItem('Contact Us', '/contact'),
    getItem('Our Team', '/team'),
    getItem('Jobs', '/jobs'),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
  
  ];

const MobileNav = ({onChange, navLinks}: MobileNavProps) => {
    const router = useRouter()
    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e);
        void router.push(e.key).then(() => {
            onChange?.(e.key);
        });
      };
    
      return (
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[router.asPath]}
          mode="inline"
          items={toMenuItem(navLinks)}
        />
      );
}

export default MobileNav