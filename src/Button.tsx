import React, { MouseEventHandler } from 'react'
import './Button.css'

// interface IProps {
//   size?: string;
//   children?: string | JSX.Element | JSX.Element[];
// }

// export default function Button(props: IProps) {
//   return (
//     <div className={`button ${props.size}`}>
//       { props.children }
//     </div>
//   )
// }

interface IProps {
  size?: string;
  onClick?: MouseEventHandler;
}

const Button: React.FunctionComponent<IProps> = function(props) {
  return (
    <div className={`button ${props.size}`} onClick={props.onClick}>
      { props.children }
    </div>
  )
}

export default Button;