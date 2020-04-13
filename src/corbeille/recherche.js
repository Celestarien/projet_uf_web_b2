import React from 'react'
import { Input, Button } from 'antd'
import SearchResultsList from '../components/SearchResultList'

// export default class Search extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoading: false,
//             result: []
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div className="search-control">
//                     <span>Recherche</span>
//                     <Input />
//                     <Button>Chercher</Button>
//                 </div>
//                 <div className="search-nb-results">? Résultat(s)</div>
//                 {this.state.isLoading ? () : () }
//             </div>
//         )
//     }
// }