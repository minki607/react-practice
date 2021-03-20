import { Input } from 'semantic-ui-react'
import { searchForm } from './SearchForm.module.scss'

const SearchForm = ({ handleChange, handleSubmit, query }) => {
    return (
        <form className={searchForm} onSubmit={handleSubmit}>
            <Input
                value={query}
                onChange={handleChange}
                placeholder="검색..."
                icon="search"
            ></Input>
        </form>
    )
}

export default SearchForm
