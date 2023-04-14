/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/utils/api'
import { UndoOutlined } from '@ant-design/icons';
import { Button, Select, message } from 'antd';
import React, { useContext, useState } from 'react'
import { MdRefresh } from 'react-icons/md';
import { fetchCurrencyData } from '~/lib/currencyApi';
import { SiteContext } from '~/lib/providers/SiteProvider';
import CurrencySelector from '../inputs/CurrencySelectorInput';
import { SiteConfig } from '@prisma/client';
import { convertNullToUndefined } from '@/utils/convertNullToUndefiend';

const UpdateCurrencyRate = () => {

    const updateMutation = api.country.update.useMutation();
    const updateSettingMutation = api.setting.update.useMutation();
    const [loading, setLoading] = useState(false);
    const {info, setInfo} = useContext(SiteContext);

    const updateRates = async (base?: string) => {
        try {
            setLoading(true);
            const ratesRes = await fetchCurrencyData({base: base || info?.baseCur||''})
            const dataForUpdate = {
                base: ratesRes.base,
                rates: Object.entries(ratesRes.rates).map(([key, value]) => {
                    return {
                        code: key,
                        rates: value
                    }
                })
            };
            const res = await updateMutation.mutateAsync(dataForUpdate);
            void message.success("Currency refresh successfully!");
            setLoading(false);
        } catch (error) {
            void message.error("Failed in updating currency rates");
            setLoading(false);
        }
    }
    const updateBaseCurrency = async (baseCur: string) => {
        if(!info) return;
        try {
            setLoading(true);
            const newInfo = JSON.parse(JSON.stringify(info)) as SiteConfig;
            newInfo.baseCur = baseCur;
            const res = await updateSettingMutation.mutateAsync(convertNullToUndefined<any>(newInfo));
            if(res){
                await updateRates(res.baseCur === null ? undefined : res.baseCur);
                setInfo?.(res)
            };
            void message.success("Currency refresh successfully!");
            setLoading(false);
        } catch (error) {
            void message.error("Failed in updating currency rates");
            setLoading(false);
        }
    }
  return (
    <div className='flex justify-between items-center'>
        <div className="flex-grow">
            <CurrencySelector value={info?.baseCur} onChange={updateBaseCurrency}/>
        </div>

          <div className='flex-grow-0 w-max'><Button loading={loading} disabled={loading} onClick={() => void updateRates()} icon={<UndoOutlined/>}>Refresh</Button></div>
    </div>
  )
}

export default UpdateCurrencyRate