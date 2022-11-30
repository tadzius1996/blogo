import React from 'react';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({post}) => {
  return (
    <div className='mt-0 mb-7 lg:mr-20 flex'>
    <div className='bg-white lg:w-2/3 md:w-1/2 w-full h-full p-0 m-5 mt-0 rounded-xl'>
        <div>
        <img src={post.featuredImage.url} alt={post.slug} className='w-11/12 h-auto m-auto pt-5'/>
          <div className='flex justify-between px-12 pt-5'>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <span className=''>BY {post.author.name.toUpperCase()}</span>
          </div>
        <div className='text-center mt-5'>
        <h1 className='text-2xl font-semibold'>{post.title}</h1>
        <p className='mt-5 w-11/12 m-auto'>{post.excerpt}</p>
        <Link href={`/post/${post.slug}`}><Button variant="filled" className='mt-5 mb-5'>Continue Reading</Button></Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default PostCard