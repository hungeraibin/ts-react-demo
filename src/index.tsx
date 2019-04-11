import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const fn = function(e: React.MouseEvent) {
  console.log(e);
}

ReactDOM.render(
  <div>
    <Button size="small"><span>点我</span></Button>
    <Button onClick={fn}>Click</Button>
    <Button size="big">
      <span>点我</span>
      <span>点我</span>
    </Button>
  </div>,
  document.getElementById('root')
);
