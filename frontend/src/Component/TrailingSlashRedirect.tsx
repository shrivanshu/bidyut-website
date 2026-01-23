import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      const newPath = location.pathname.slice(0, -1) + location.search + location.hash;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;