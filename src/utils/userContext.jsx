import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

//this userProvider give details like user details to every child
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("avatar", user.avatar);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("avatar");
      localStorage.removeItem("token")
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
