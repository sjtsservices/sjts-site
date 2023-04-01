/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dynamic from 'next/dynamic';
// import RichTextEditor from 'react-rte';
import React from 'react'
import 'react-quill/dist/quill.snow.css'


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


export type EditorProps = {
  value?: any,
  onChange?: (value: any) => void,
  placeholder?: string,
  classNames?: string,
  style?: React.CSSProperties,
}

const Editor = ({ value, onChange, placeholder }: EditorProps) => {


    const modules = {
        toolbar: [
          [{ 'header': [2, 3, 4, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link',]
        ],
      }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

  const handleChange = (value: string) => {
    onChange?.(value)
  }

  return (
    <QuillNoSSRWrapper  placeholder={placeholder} value={value} modules={modules} theme="snow" onChange={handleChange}  style={{borderRadius: '10px'}} formats={formats}/>
  )
}

export default Editor