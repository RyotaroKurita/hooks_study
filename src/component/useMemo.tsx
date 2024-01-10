import { useState, useCallback, useMemo } from "react";
//useMemoとuseCallbackの違い
//In short, useMemo calls a function when dependencies change,
//and memoizes (remembers) the result of the function between renders.
//This is in contrast with useCallback which remembers an existing value (typically a function's definition), between renders.
//ref -> https://maxrozen.com/understanding-when-use-usememo

//先にBank型を定義しておく必要がある。
type Bank = {
  bankName: string;
  bankCode: string;
};

const allBanks: Bank[] = [
  { bankName: "三菱UFJ銀行", bankCode: "0005" },
  { bankName: "三井住友銀行", bankCode: "0009" },
  { bankName: "みずほ銀行", bankCode: "0010" },
  { bankName: "埼玉りそな銀行", bankCode: "0011" },
  { bankName: "三井住友信託銀行", bankCode: "0012" },
  { bankName: "りそな銀行", bankCode: "0013" }
];

//検索部分のコンポーネント
function Search({ onChange }: { onChange: (text: string) => void }) {
  return (
    <input
      type='text'
      placeholder='銀行名で検索'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

//入力値と銀行リストを受け取る
//処理本体
export default function CheckUseMemo() {
  //nullを指定することで、初期値をnullにすることができるorエラー発生（初期値が空のため）
  const [bank, setBank] = useState<Bank | null>(null);

  //useMemoを使用したサンプルコードを作成
  const handleSearch = useMemo(() => (text: string) => {
    const targetBank = allBanks.find((bank) => {
      return bank.bankName.includes(text);
    });

    setBank(targetBank || null);
    setRenderCnt(renderCnt + 1);
    return targetBank;
  }, []);

  //useMemoを使用しない場合
  const handleSearchWithoutMemo = (text: string) => {
    const targetBank = allBanks.find((bank) => {
      return bank.bankName.includes(text);
    });

    setBank(targetBank || null);
    setRenderCntWithoutMemo(renderCntWithoutMemo + 1);
    return targetBank;
  };

  //レンダリングカウント用
  const [renderCnt, setRenderCnt] = useState<number>(0);
  const [renderCntWithoutMemo, setRenderCntWithoutMemo] = useState<number>(0);

  return (
    <div>
      <h2>銀行リスト</h2>
      <p>検索対象の一覧です。挙動確認用に表示しています。</p>
      <ul>
        {allBanks.map((bank, index) => (
          <li key={index}>{bank.bankName}</li>
        ))}
      </ul>

      <div>
        {/* useMemoありとなしのHTMLを分けて表示 */}
        <h2>useMemoあり</h2>
        <p>対象のコードが返却されます。</p>
        <Search onChange={handleSearch} />
        {bank ? (
          <p>{bank.bankName}のコードは{bank.bankCode}です</p>
        ) : (
          <p>該当する銀行はありません</p>
        )};
        <p>レンダリング回数：{renderCnt}</p>
      </div>

      <div>
        <h2>useMemoなし</h2>
        <Search onChange={handleSearchWithoutMemo} />
        {bank ? (
          <p>{bank.bankName}のコードは{bank.bankCode}です</p>
        ) : (
          <p>該当する銀行はありません</p>
        )};
        <p>レンダリング回数：{renderCntWithoutMemo}</p>
      </div>
    </div>
  )
}
