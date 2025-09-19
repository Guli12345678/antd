import { Button, Image, Input } from 'antd';
import { memo } from 'react';
import photo from "../assets/girl.jpg"

const Main = () => {
  return (
    <div className="container mx-auto">
      <h2>Main</h2>
      <Button loading={false} type="primary">Primary Button</Button>
      <br />
      <br />
      <div className='w-1/2'>
        <Input className=''/>
      </div>
      <Image width={300} src={photo} alt=''/>
    </div>
  );
};

export default memo(Main);