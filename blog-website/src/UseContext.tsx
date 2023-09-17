import { createContext, useState } from "react";

interface IUserContext {
    userInfo: any;
    setUserInfo: React.Dispatch<React.SetStateAction<any>>;
  }

  const UserContext = createContext<IUserContext>({
    userInfo: null,
    setUserInfo: () => {},
  });

function UserProvider({ children }: { children: React.ReactNode}) {
    const [userInfo, setUserInfo] = useState<{username?: string,email?: string}>({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };

