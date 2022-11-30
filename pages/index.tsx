import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Author, Comments, CommentsForm, PostCard, Widget } from '../components';
import {getPosts} from '../services';
import{FeaturedPosts} from '../sections'
// @ts-nocheck
export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
    
    <div className="px-10 mb-8 flex flex-col mt-20">
      <Head>
        <title>BLOGO</title>
      </Head>
      <FeaturedPosts/>
      <div className='md:container flex flex-col fex-wrap justify-center w-full'>
       {posts.map((post, index) => (
        <PostCard post={post.node} key={index}/>
       ))}
      </div>
      <Widget/>
      <Author/>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}




