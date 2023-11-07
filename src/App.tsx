import React from 'react';
import {useState, useRef} from 'react';

function App() {
  //useRefを使うことでDOMノードへ直接アクセスできる
  //TSではHTMLのどの要素から値を取得するかを明確に指定する必要がある
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const [cnt, setCnt] = useState<number>(0);

  //useState=カウントをクリックすごとに再レンダリングされる
  //useRefはの場合は下記は呼ばれない＝再レンダリングされていないため
  //開発環境においては、初期化が2回行われる。これはReact.StrictModeの仕様によるもの
  console.log("rendering");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputName.current?.value;
    const email = inputEmail.current?.value;
    const password = inputPassword.current?.value;

    //ここではアラートをしているだけだが、取得した値を用いて実際はAPIを叩いたりする
    alert("入力値\n 名前："+ name + "\n Eメール："+ email + "\n パスワード："+ password);

    inputName.current!.value = '';
    inputEmail.current!.value = '';
    inputPassword.current!.value = '';
  };

  const handleClick = () => {
    setCnt(cnt + 1);
  };

  return (
    <>
    <form onSubmit={submit}>
      <input ref={inputName} type="text" placeholder="名前" />
      <input ref={inputEmail} type="text" placeholder="Eメール" />
      <input ref={inputPassword} type="text" placeholder="パスワード" />
      <button type="submit">Submit</button>
    </form>
    クリックごとにカウントが増えますCOUNT：<button onClick={handleClick}>{cnt}</button>
    </>
  );
}

export default App;
