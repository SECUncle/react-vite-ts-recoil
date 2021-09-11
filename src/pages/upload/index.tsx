import React, { useState } from "react"


import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const UploadPage = () => {

  const createStorage = () => {

  }

  const uploadFileToStorage = () => {

  }

  const createFileVersion = () => {

  }
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }


  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const props = {
    // action: '/upload.do',
    multiple: true,
    onStart(file) {
      console.log('onStart', file, file.name);
    },
    onSuccess(ret) {
      console.log('onSuccess', ret);
    },
    onError(err) {
      console.log('onError', err);
    },
    beforeUpload(file, fileList) {
      // console.log(file, fileList);
      // return new Promise(resolve => {
      //   console.log('start check');
      //   setTimeout(() => {
      //     console.log('check finshed');
      //     resolve(file);
      //   }, 3000);
      // });
      return false;
    },
    handleChange: info => {
      if (info.file.status === 'uploading') {
        setLoading(true)
        // this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          setLoading(true);
          setImageUrl(imageUrl);
        }
        );
      }
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const upload=(file)=>{
    console.log('aa')
  }
  return (
    <>
    <Upload
      // name="avatar"
      // listType="picture-card"
      // className="avatar-uploader"
      // showUploadList={false}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      // beforeUpload={beforeUpload}
      // onChange={handleChange}
      {...props}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>

    <Button onClick={upload}>上传</Button>
    </>

  )
}

export default UploadPage