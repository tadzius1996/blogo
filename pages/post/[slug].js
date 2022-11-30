import { get } from 'http';
import React from 'react';
import { getPostDetails, getPosts, getRecentPosts} from '../../services';
import {Author, PostDetail, Widget, CommentsForm, Comments} from '../../components'

const PostDetails = ({post}) => {
    console.log(post)
  return (
    <div className='flex flex-col'>
        
        <PostDetail post={post}/>
        <Widget/>
        <Author/>
        <CommentsForm/>
        <Comments/>
    </div>
  )
}

export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts?.map(({node: {slug}}) => ({params: {slug}})),
        fallback: true,
    }
}

export default PostDetails