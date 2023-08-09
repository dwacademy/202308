import React from 'react';
// 포함되는 내부 컴포넌트의 사용
// 내부의 내용이 보여지게 하기 위해서는 props.children 을 렌더링해주어야 합니다.
function Props5({children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
    margin: '20px'
  };
  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Props5;