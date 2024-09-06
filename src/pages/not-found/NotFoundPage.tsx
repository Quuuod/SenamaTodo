import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Page Not Found"
      extra={
        <Button type="primary" onClick={handleClick}>
          {'Back Home'}
        </Button>
      }
    />
  );
};
