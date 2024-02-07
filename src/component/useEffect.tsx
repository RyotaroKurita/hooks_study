import {useState, useEffect} from "react";

export default function CheckUseEffect() {
  const [cnt, setCnt] = useState(0);

  //useEffectの第二引数にはsetState,Props

  //初回描画時は、マウント、アンマウント、再マウント
  //useEffect 第二引数[]
  useEffect(() => {
    console.log("第二引数[]");
  }, [])

  //useEffect 第二引数cnt
  useEffect(() => {
    console.log("第二引数cnt");
  }, [cnt])

  // useEffect(() => {
  //   post('/analytics/event', { eventName: 'visit_form' });
  // }, []);

  const cntup = () => {
    setCnt(cnt + 1);
  }

  return (
    <>
      <h1>クリック回数:{cnt}</h1>
      <button onClick={cntup}>カウントアップしまっせ</button>
    </>
  )
}
