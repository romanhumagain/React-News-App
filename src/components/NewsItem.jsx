import React from 'react';
import { MdReadMore } from "react-icons/md";

const NewsItem = ({ title, description, url, imageUrl, publishedDate }) => {
  return (
    <div className="card max-w-sm bg-zinc-600 rounded-lg shadow-md overflow-hidden mx-12 my-5">
      <img className='w-full h-48 object-cover' src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className='text-xl font-semibold text-white mb-2'>{title.slice(0, 45)}</h2>
        <p className='text-white mb-4'>{description}</p>
        <p className='text-white font-extralight from-neutral-100 text-sm my-5'>Published on: {new Date(publishedDate).toGMTString()}</p>
        <a href={url} target="_blank" className='bg-red-500 text-white font-semibold py-2 px-2 rounded cursor-pointer hover:bg-red-600 transition duration-300 flex max-w-40'>
          Read More <MdReadMore className="text-2xl mx-2" />
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
