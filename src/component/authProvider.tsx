import React, { createContext, ReactNode, FC, useContext } from "react";

// 使用するデータの型を定義
type AuthInformation = {
  accountLevel : "Admin" | "Normal" | "Guest";
  accountName : string;
}

//typeで定義できるが、関数の引数でObjectを扱う際にはinterfaceをつかうことが一般的（らしい）
interface AuthProviderProps {
  //null,Undefined,やReactComponentを１つの型宣言で行うことができる
  //https://commte.net/reactnode
  children: ReactNode;
}

const AuthContext = createContext<AuthInformation | undefined>(undefined);

//ReturnHtml内で使用するためにexport
export function UsingContext() {
  return useContext(AuthContext);
}

// React.FCを使用してPropsの型を指定
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  //今回は固定値を渡しているが、実際はここを変動的にすることで画面の出し分け制御をする。
  //値を書き換えたあとに明示的にリロード（ctrl＋R）をしないと値が書き換わらない
  //なぜか確認
  const userInformation: AuthInformation = {
    accountLevel: "Normal",
    accountName: "凌太郎",
  };

  return (
    <AuthContext.Provider value={userInformation}>
       {/* useContext.tsx内でReturnHtmlがchildrenとして渡される */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
