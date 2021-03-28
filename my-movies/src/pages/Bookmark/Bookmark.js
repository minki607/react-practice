import React from 'react'
import { headline } from './Bookmark.module.scss'
import { Helmet } from 'react-helmet-async'
import { readAllBookmarkAction, useBookmark } from 'contexts'
import { serialize } from 'utils'

/* -------------------------------------------------------------------------- */

export default function BookmarkPage(props) {
    const { state, dispatch } = useBookmark()

    React.useEffect(() => dispatch(readAllBookmarkAction()), [state])

    return (
        <div className="bookmark-page">
            <Helmet>
                <title>
                    북마크 페이지 (인증 사용자 전용) ← "나의 영화" 서비스
                </title>
            </Helmet>
            <h1 className={headline}>북마크 페이지</h1>
            <pre
                style={{
                    width: 640,
                    margin: '100px auto',
                    whiteSpace: 'pre-wrap',
                }}
            >
                {serialize(state, null, 2)}
            </pre>
        </div>
    )
}
