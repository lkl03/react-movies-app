import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import Search from '../components/Search'
import useQuery from '../hooks/useQuery'
import useDebounce from '../hooks/useDebounce'

const LandingPage = () => {
    const query = useQuery()
    const search = query.get('search')

    const debouncedSearch = useDebounce(search, 300)
    return (
        <div>
        <Search></Search>
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}></MoviesGrid>
        </div>
    )
}

export default LandingPage
