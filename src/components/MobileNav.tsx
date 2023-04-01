import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

export type MobileNavProps = {
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


  const items: MenuProps['items'] = [
    getItem('Home', '/'),
    getItem('About Us', '/about'),
    getItem('Contact Us', '/contact'),
    getItem('Our Team', '/team'),
    getItem('Jobs', '/jobs'),
  
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 5', '5'),
    //   getItem('Option 6', '6'),
    //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    // ]),
  
  ];

const MobileNav = ({onChange}: MobileNavProps) => {
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
          items={items}
        />
      );
}

export default MobileNav