import React, {useState} from 'react';
import { getPostDetails } from '../services';
import moment from 'moment';

const PostDetail = ({post}) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className='flex md:ml-16 mt-20 px-5'>
    <div className='bg-white w-full md:w-1/2 lg:w-3/5 h-auto pb-10 rounded-xl'>
        <div>
        <img src={post.featuredImage.url} alt={post.slug} className='w-11/12 h-auto m-auto pt-10'/>
        <div className='text-center mt-2'>
          <div className='flex justify-between px-12 pt-2'>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            <span className=''>BY {post.author.name.toUpperCase()}</span>
          </div>
        <h1 className='text-2xl font-semibold my-6'>{post.title}</h1>
        <div className='px-7 text-left'> 
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default PostDetail