import React from 'react'
import SearchResult from './SearchResult'
import { Result } from 'antd'

const SearchResultsList = props => {
    return (
        <div>
            {props.results.map(result => <SearchResult data={result} />)}
        </div>
    )

}
export default SearchResultsList