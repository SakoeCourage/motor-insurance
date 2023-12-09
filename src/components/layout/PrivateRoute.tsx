import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, loading } = { user: {id: 1}, loading: false };
  useEffect(() => {
    if (!user && !loading) {
      router.replace("/");
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? children : null;
};

export default PrivateRoute;
