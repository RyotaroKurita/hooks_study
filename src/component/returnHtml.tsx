import { UsingContext } from "./authProvider";

export default function ReturnHtml() {
  const accountContext = UsingContext();

  //存在チェックをつけないとエラーが表示される
  if (!accountContext) {
    return <div>404 not found</div>
  } else {
    const {accountLevel, accountName} = accountContext;
    return (
      <div>
        {/* 受け取ったcontextにより出し分け */}
        {accountLevel === "Admin" && <p>管理者ログインです</p>}
        {accountLevel === "Normal" && <p>一般ユーザーログインです</p>}
        {accountLevel === "Guest" && <p>ゲストとグインです</p>}
        ログインユーザー：{accountName}!
      </div>
    );
  }
}
