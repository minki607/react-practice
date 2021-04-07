import React, { useEffect, useState } from 'react'
import { Item } from 'semantic-ui-react'
import Post from '../../components/Post/Post'
import FormInput from '../../components/FormInput/FormInput'

import db from '../../firebase'
import { useSelector } from 'react-redux'

const Posts = () => {
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([])
    const { profile } = useSelector((state) => state.profile)

    useEffect(() => {
        const postsColRef = db.collection('posts')
        const unsubscribe = postsColRef
            .orderBy('createdAt', 'desc')
            .onSnapshot((querySnapshot) => {
                const _posts = []
                querySnapshot.forEach((doc) => {
                    _posts.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                })

                setPosts(_posts)
            })
        return () => unsubscribe()
    }, [])

    const onContentSubmit = async () => {
        const date = new Date()

        await db.collection('posts').add({
            content,
            createdAt: date.toUTCString(),
            user: profile,
        })
        setContent('')
    }

    return (
        <>
            <FormInput
                onContentSubmit={onContentSubmit}
                content={content}
                setContent={setContent}
            />
            <Item.Group>
                {posts &&
                    posts.map((post) => <Post key={post.id} post={post} />)}
            </Item.Group>
        </>
    )
}
export default Posts
