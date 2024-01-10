import {memo} from 'react';

function Search({onChange}: {onChange: (text: string) => void}) {

  return (
    <input
      type='text'
      placeholder='メンバー名で検索'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default memo(Search);
