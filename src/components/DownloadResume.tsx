import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { PropsWithChildren, useState } from 'react'


export type DownloadButtonProps = {
    pdfURL: string,
    outputFilename: string,
    small?: boolean
}

const DownloadResume = ({ pdfURL, outputFilename, children, small }: PropsWithChildren<DownloadButtonProps>) => {
    const [loading, setLoading] = useState(false)
    const downloadPDF = async () => {
        try {
            setLoading(true)
            const response = await fetch(pdfURL);
            const blob = await response.blob();
            const href = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = outputFilename;
            document.body.appendChild(link);
            setLoading(false)
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };

    return (
        <>
        {
            !children ? <Button onClick={() => void downloadPDF()} disabled={loading} loading={loading} icon={<DownloadOutlined/>}>{small ? '' : 'Download'}</Button> : <span onClick={() => void downloadPDF()}>{children}</span>
        }
        </>
    );
};

export default DownloadResume;