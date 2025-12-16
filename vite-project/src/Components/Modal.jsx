import React, { useState } from 'react';
import { Button, Modal } from 'antd';
// import { Divider } from 'antd';

const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
    
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Choose your location
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        // onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>Select a delivery location to see product availability and delivery options</p>
        <button className="bg-[#F7CA00] p-1 text-black w-full rounded-full !mt-5">
Sign in to see your addresses
</button>
  {/* <div>
    <Divider classNames={classNamesObject}>classNames Object</Divider>
    <Divider titlePlacement="start" classNames={classNamesFn}>
      classNames Function
    </Divider>
    <Divider styles={stylesObject}>styles Object</Divider>
    <Divider size="small" styles={stylesFn}>
      styles Function
    </Divider>
  </div> */}
    {/* <input></input> */}
     <button>Apply</button>
      </Modal>
    </>
  );
};
export default App;