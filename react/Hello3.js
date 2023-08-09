import React from 'react';
import './Hello3.css'; // 추가

function Hello3() {
  let name="한사람"; // 변수 사용가능
  return (
    <>
    {/* JSX주석이다. 
     CSS class 를 설정 할 때에는 class= 가 아닌 className= 으로 
     설정을 해주어야 합니다. 
    */}
    <h3 className='Gray-box'>안녕하세요 {name}님!!!</h3>
    </>
  )
}

export default Hello3;