// Core
import { Navigate, useLocation } from "react-router-dom";

// Properties
import { AuthSecurityProperties } from "./auth.properties";

// Utilities
import { get_token } from "../utilities/storage.utility";

export function AuthSecurity(properties: AuthSecurityProperties) {
  const token = get_token();
  const location = useLocation();

  // Validate if the route is security
  if (properties.security) {
    if (token) {
      return properties.children;
    } else {
      return <Navigate to="/start" state={{ from: location }} replace />;
    }
  }

  // Validate if the route is not security
  if (token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return properties.children;
  }
}
