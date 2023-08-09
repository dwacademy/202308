import React from 'react';
// 조건부 렌더링 : 3항 연산자의 사용
function Props6({color,name,isSpecial}) {
  return (

    <div style={{color}}>
      { isSpecial ? <b> * </b> : null }
      안녕하세요 {name}
    </div>
  );
}

export default Props6;