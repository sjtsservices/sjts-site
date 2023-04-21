import React, { useEffect, useRef, useState } from 'react'
import { usePdf } from '@mikecousins/react-pdf';
import { Button, Result, Spin } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export type PdfViewerProps = {
    url: string,
}

const PdfViewer = ({ url }: PdfViewerProps) => {

    const [page, setPage] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading, setLoading] = useState(true);
    const [documentLoadFail, setDocumentLoadFail] = useState(false);

    const { pdfDocument, pdfPage } = usePdf({
        file: url,
        page,
        canvasRef,
        onDocumentLoadFail() {
            setLoading(false);
            setDocumentLoadFail(true);
        },
        onDocumentLoadSuccess(){
            setLoading(false);
            setDocumentLoadFail(false);
        },
        onPageLoadFail(){
            return <Result status={'500'} title="Oops' Problem with loading."></Result>
        }
    });


    useEffect(() => {
        const can = canvasRef.current;
        if (can) {
            can.style.width = '100%';
        }
    }, [canvasRef])


    if(loading){
        return <div className='h-96 flex justify-center items-center '><Spin size='large' /></div>
    }

    if(documentLoadFail) return <Result status={'500'} title="Oops' Problem in loading CV"></Result>;


    return (
        <div className='grid place-content-center'>
            <div className="w-min">
               
                <div className="w-full">
                    <canvas ref={canvasRef} className="aspect-square" />
                </div>
                {pdfDocument && pdfDocument.numPages && (
                    <nav className='w-full p-y-2 px-5 bg-gray-50 flex items-center justify-between rounded' >

                        <Button size='large' disabled={page === 1} onClick={() => setPage(page - 1)} type="ghost" icon={<LeftOutlined />}>
                            Previous
                        </Button>

                        <Button
                            disabled={page === pdfDocument.numPages}
                            onClick={() => setPage(page + 1)}
                            icon={<RightOutlined />}
                            type="ghost"
                            size='large'
                        >
                            Next
                        </Button>

                    </nav>
                )}
            </div>
        </div>
    )
}

export default PdfViewer