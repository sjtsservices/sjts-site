import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, List, Skeleton, Tag } from 'antd';
import { api } from '@/utils/api';
import { CompanyEnquiry, Enquiry } from '@prisma/client';
import randomTailwindGradient from '~/lib/randomTailwindGradient';
import EnquiryDetailDrawer from './EnquiryDetailDrawer';
import dayjs from 'dayjs';
import realtiveTime from 'dayjs/plugin/relativeTime';
import { RightOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

dayjs.extend(realtiveTime);
export type EnquiryListProps = {
    enquiries: CompanyEnquiry[],
    loading?: boolean,
    onDelete?: (enquiry: Enquiry) => void,
    className?: string
}



const EnquiryList = ({enquiries, loading, onDelete, className}: EnquiryListProps) => {

  
//   const onLoadMore = () => {
    
//   };

//   const loadMore =
//     !initLoading && !loading ? (
//       <div
//         style={{
//           textAlign: 'center',
//           marginTop: 12,
//           height: 32,
//           lineHeight: '32px',
//         }}
//       >
//         <Button onClick={onLoadMore}>loading more</Button>
//       </div>
//     ) : null;



  return (
    <List
      className={className}
      loading={loading}
      itemLayout="horizontal"
    //   loadMore={loadMore}
      dataSource={enquiries}
      renderItem={(item) => (
        <List.Item
          actions={[<EnquiryDetailDrawer key={nanoid()} enquiry={item} onDelete={onDelete}><Button type="ghost" size="small" icon={<RightOutlined/>}></Button></EnquiryDetailDrawer>]}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={<Avatar className={`${randomTailwindGradient()} text-white`}>{item.name.trim().charAt(0).toUpperCase()}</Avatar>}
              title={<EnquiryDetailDrawer enquiry={item} onDelete={onDelete}>{item.name}</EnquiryDetailDrawer>}
              description={
                <div className=''>
                    <div className=" flex flex-col gap-1">
                        <span>{dayjs(item.createdAt).fromNow()}</span>
                        <span className='capitalize'><Tag color='orange'>{item.type}</Tag></span>
                    </div>
                </div>
              }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default EnquiryList;