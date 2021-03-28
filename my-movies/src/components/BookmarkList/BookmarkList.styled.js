import { Bookmark, BookmarkButton } from 'components'
import styled from 'styled-components'

const List = ({ key, children, ...restProps }) => {
    return (
        <li key={key} {...restProps}>
            {children}
        </li>
    )
}

const Link = ({ href, children, ...restProps }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
            {children}
        </a>
    )
}

const Poster = ({ src, alt, ...restProps }) => {
    return <img src={src} alt={alt} {...restProps} />
}

const BookmarkList = styled(List)`
    color: #fff;
    display: flex;
    max-width: 800px;
    position: relative;
    margin-top: 4em;
`

BookmarkList.HomepageLink = styled(Link)``

BookmarkList.List = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

BookmarkList.Poster = styled(Poster)`
    width: 150px;
    height: 100%;
    margin-right: 15px;
    border: 1px solid red;
`

BookmarkList.Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`
BookmarkList.Title = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
`

BookmarkList.Tagline = styled.h4`
    margin: 0;
`

BookmarkList.Overview = styled.p``

BookmarkList.Button = styled(BookmarkButton)`
    color: red;
    position: absolute;
    top: 0;
    right: 10px;
`

export default BookmarkList
