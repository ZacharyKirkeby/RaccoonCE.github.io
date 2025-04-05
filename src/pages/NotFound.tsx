import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import CardContainer from "@/components/CardContainer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-4">
      <CardContainer className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-block text-8xl font-bold mb-4">
            <span className="text-gradient">404</span>
          </div>
          <h1 className="text-2xl font-bold text-cyber-light mb-2">Page Not Found</h1>
          <p className="text-cyber-light/70 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="cyber-grid w-full h-1 my-6 opacity-30"></div>
          <Link to="/" className="cyber-button inline-block">
            Return to Home
          </Link>
        </div>
      </CardContainer>
    </div>
  );
};

export default NotFound;