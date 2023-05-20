import { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface User {
  // Ajoutez ici les propriétés de l'utilisateur si nécessaire
}

const Auth = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        setUser({} as User);
      } else {
        setUser(null);
      }
    }, 100);
  }, []);

  if (user === undefined) {
    return null;
  }
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default Auth;
