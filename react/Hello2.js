import React from 'react';

function Hello2() {
  let name="한사람"; // 변수 사용가능
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
    {/* JSX주석이다. 
    루트 태그가 존재해야 한다. 
    반드시 루트 태그안에 있어야 한다. 
    반드시 닫는 태그가 있어야 한다.
    */}
    <h3 style={style}>안녕하세요 {name}님!!!</h3> {/* 변수값 사용 */}
    </>
  )
}

export default Hello2;