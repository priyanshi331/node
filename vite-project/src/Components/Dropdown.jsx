import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import { Dropdown, Space } from 'antd';
 import {
GlobalOutlined }
 from '@ant-design/icons';
const items = [
  {
    key: '1',
    label: (
      <h2>Select language</h2>  
      
    ),
  },
  {
    key: '2',
    label: (
        <Radio>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        English-EN
      </a>
      </Radio>
    ),
    // icon: <SmileOutlined />,
  },
  {
    key: '3',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        हिन्दी - HI 
      </a>
            </Radio>

    ),
  },
 {
    key: '4',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        தமிழ் - TA 
      </a>
            </Radio>

    ),
  },

 {
    key: '5',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        తెలుగు - TE 
      </a>
            </Radio>

    ),
  },
   {
    key: '6',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
ಕನ್ನಡ - KN 
      </a>
            </Radio>

    ),
  },

 {
    key: '6',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
മലയാളം - ML 
      </a>
            </Radio>

    ),
  },

   {
    key: '6',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
বাংলা - BN 
      </a>
            </Radio>

    ),
  },

   {
    key: '6',
    label: (
                <Radio>

      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
मराठी - MR
      </a>
            </Radio>

    ),
  },
   
 
];
const App = () => (
  <Dropdown menu={{ items }}>
     <a onClick={e => e.preventDefault()} 
  className="border border-gray-500 p-2 pl-6 pr-6 rounded-sm  flex items-center"
  style={{ color: "white" }} 
    >  


      <Space>
        <GlobalOutlined />



                English

        <DownOutlined />
      </Space>
          </a>

        </Dropdown>

);
export default App;

