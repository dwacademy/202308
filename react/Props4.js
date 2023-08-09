import React from 'react';

function Props4({color,name}) {
  return <div style={{color}}>안녕하세요 {name}</div>
}
Props4.defaultProps = {
  name: '이름없음',
  color: 'red'
}

export default Props4;