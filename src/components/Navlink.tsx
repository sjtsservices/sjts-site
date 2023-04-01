import { matchRoute } from '../helpers/routeMatch';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {DownOutlined} from '@ant-design/icons';
import { Dropdown, type MenuProps } from 'antd';
import { nanoid } from 'nanoid';


export interface NavLinkProps {
  href: string;
  lable: string;
  childLinks?: NavLinkProps[]
}

const LinkButton = ({href, lable, isChild, isActive}: NavLinkProps&{isActive?: boolean, isChild?: boolean}) => {
   return (
    <Link href={href} className={`${
        isActive ? 'text-primary' : 'text-gray-600'
      } hover:text-primary
      transition-all
      inline-flex items-center
      space-x-1
      `}>
          <span>{lable}</span> {isChild && <span className='text-xs font-bold'><DownOutlined/></span>}
      </Link>
   )
}
// {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//     key: '0',
//   },

function generateDrobdownItem(links: NavLinkProps[]): MenuProps['items']{

    const out = links.map(link => {
        return {
            label: (<a target="_blank" rel="noopener noreferrer" href={link.href}>
                    {link.lable}
                  </a>),
            key: nanoid()
        }
    });


    return out;
    
}

function NavLink({ href, lable, childLinks }: NavLinkProps) {
  const router = useRouter();
  const isActive = matchRoute(href, router.asPath).valueOf();
  // console.log({isActive, href, pahname: router.asPath})
  // const isActive = false;
  return (
    <>
    {
        !childLinks && <LinkButton {...{href, lable}} isChild={childLinks?true:false} isActive={typeof isActive === 'boolean' ? isActive : false}  />
    }
    {
        childLinks && <Dropdown menu={{items: generateDrobdownItem(childLinks)}}>
            <LinkButton {...{href, lable}} isChild={childLinks?true:false} isActive={typeof isActive === 'boolean' ? isActive : false}  />
        </Dropdown>
    }
    </>
  );
}

export default NavLink;