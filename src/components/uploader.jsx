import React from 'react';
// import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


const props = {
  name: 'file',
  multiple: true,
  //action: url, // API url to send data
  onChange(info) {
    const { status } = info.file;
    const { name } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
    
    if (!name.endsWith("mp3")) {
      message.error(`${name} file upload failed. Mp3s allowed only.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      {/* <InboxOutlined /> */}
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
);
export default App;