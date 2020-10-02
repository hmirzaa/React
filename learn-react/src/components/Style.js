import React, { Component } from 'react'
import style from './Style.module.css'
import myStyle from './Style.module.css'
// External Styling
// import './../Style.css'

// Inline Styling
// const heading = {
//     fontSize:'50px',
//     color:'blue'
// }

// External Styling
// export default class Style extends Component {

//   constructor(props) {
//       super(props)
  
     
//   }
  
    

//     render() {

//         const message = this.props.primary ? 'primary' : ''

//         return (
//             <div>
//                 <h2 className={message}>Hamza Mughal</h2>
//             </div>
//         )
//     }
// }


// Inline Styling
// export default class Style extends Component {

    
//       render() {
  
  
//           return (
//               <div>
//                   <h2 style={heading}>Hamza Mughal</h2>
//               </div>
//           )
//       }
//   }
  
export default class Style extends Component {

    
    render() {


        return (
            <div>
                <h2 className={style.primary}>Hamza Mughal</h2>
                <h2 className={myStyle.primary}>Hamza Mughal</h2>
            </div>
        )
    }
}