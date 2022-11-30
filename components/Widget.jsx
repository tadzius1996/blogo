import React, {useState, useEffect} from 'react';
import { getRecentPosts } from '../services';
import moment from 'moment';
import Link from 'next/link';

const Widget = ({slug}) => {
    const [recentPost, setRecentPost] = useState([]);

    console.log(recentPost)

    useEffect(() => {
      getRecentPosts().then((result) => {
        setRecentPost(result);
      });
    }, [slug]);
   
    

  return (
    <div className="m-auto bg-white shadow-lg rounded-lg p-8 h-fit-content pb-12 mb-0 md:mb-8 w-11/12 md:w-1/3 h-88 sm:block md:fixed right-14 top-96 lg:bottom-10 mt-5 md:mt-0">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">Recent Posts</h3>
    {recentPost.map((post, index) => (
      <div key={index} className="flex items-center w-full mb-0">
        <div className="w-16 flex-none">
          <img
            alt={post.title}
            height="60px"
            width="60px"
            className="align-middle rounded-full"
            src={post.featuredImage.url}
          />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Widget