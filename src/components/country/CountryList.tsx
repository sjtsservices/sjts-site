import { Country } from '@prisma/client'
import { List } from 'antd'
import React from 'react'
import VirtualList from 'rc-virtual-list';

export type CountryListProps = {
  countries: Country[]
}

const CountryList = ({
  countries
}: CountryListProps) => {
  return (
    <>
      <List>
        <VirtualList
          data={countries.sort((a, b) => a.name > b.name ? 1 : -1)}
          height={700}
          itemHeight={47}
          itemKey="alpha2"
          // onScroll={onScroll}
        >
          {(item: Country) => (
            <List.Item key={item.alpha2}>
              <List.Item.Meta
                title={<span >{item.name}</span>}
                description={<p>{item.alpha2} | {item.alpha3}</p>}
              />
              <div>{item.curSymbol} {item.rate}</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  )
}

export default CountryList