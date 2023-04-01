/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import supabase, { getSupabaseFileUrl } from '@/utils/supabase';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, message, Upload, UploadProps } from 'antd'
import React, { useState } from 'react'

export type SupabaseErrorType = {
    error: string,
    message: string,
    statusCodea: 409
}

export type CVUploaderInputProps = {
    // onChange?: (value: any) => void,
    onUpload?: (fileUrl: any) => void,
    onUploadError?: (error: any) => void,
    placeholder?: string,
}

const CVUploaderInput = ({onUpload, onUploadError}: CVUploaderInputProps) => {
    const [error, setError] = useState<Error>();
    const [uploadedFile, setUploadedFile] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const props: UploadProps = {
        name: 'file',
        headers: {
            authorization: 'authorization-text',
        },
        beforeUpload(file, FileList) {
            setError(undefined);
            setUploadedFile(file.name);
            setLoading(true);
        },
        async action(file){
            const res = await supabase.storage.from('cvs').upload(`public/${file.name}`, file);
            if(res.data && !res.error){
                onUpload?.(getSupabaseFileUrl(res.data.path));
                void message.success("Your cv uploaded successfully");
            }else if(res.error){
                const error = res.error as any;
                setError(res.error)
                void message.error("CV Uploading failed");
                if(error['statusCode'] && error.statusCode === "409" && error['error'] && error['error'] === 'Duplicate'){
                    onUpload?.(getSupabaseFileUrl(`public/${file.name}`));
                    setUploadedFile(file.name)
                }else{
                    onUploadError?.(res.error);
                }
            }
            setLoading(false);
            return "";
        },
        showUploadList: false,
        multiple: false,
        accept: 'application/pdf',
        maxCount: 1
    };
    return (
        <>
            <Upload {...props} >
                <Button disabled={loading} loading={loading} icon={<UploadOutlined />}>Click to upload CV</Button>
                {
                    uploadedFile && !error && <span className='inline-block'>{uploadedFile}</span>
                }
                {
                    error && <span className='inline-block text-red-500'>{
                        error.message
                    }</span>
                }
            </Upload>

        </>
    )
}

export default CVUploaderInput