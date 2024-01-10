import { useState, useCallback, useMemo} from "react";
//大文字でないとエラーになる
import Search from "./Search";
// useCallbackを使用したサンプルコードを作成
// useCallbackは関数をメモ化するためのフック
// useCallbackは最上位のコンポーネントでのみ使用することが出来る＝ループの中で使用することは出来ない
// 最上位とはどこか
const allMembers = [
  "栗田",
  "志村",
  "加藤",
  "高木",
  "仲本",
  "いかりや"
];

export default function SearchCallback() {

  const [members, setMembers] = useState(allMembers);

  const handleSearch = (text: string) => {
    const newMembers = allMembers.filter((member) => {
      return member.includes(text);
    });

    setMembers(newMembers);
    return newMembers;
  };

  console.log('Test');
  //renderingが発生する、なぜなら関数は依存しているから
  console.log('rendering: useCallbackの中');
  //依存していない関数にはなにがある？

  return (
    <>
      <h1>メンバー一覧</h1>
    <Search onChange={handleSearch} />
    <ul>
      {members.map((member, index) => (
        <li key={index}>{member} さん</li>
      )
      )}
    </ul>
    </>
  )
}
