import { Link } from 'react-router-dom';

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>/g, ''); // Remove HTML tags
};

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[30%] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[200px] w-full object-cover transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2 bg-white'>
        <p className='text-lg font-semibold line-clamp-2 '>{post.title}</p>
        <p className='text-gray-600 text-sm line-clamp-2 '>
          {post.description || stripHtmlTags(post.content)} {/* Stripping HTML tags */}
        </p>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 absolute bottom-2 left-0 right-0 border border-teal-500 text-teal-500 hover:bg-gradient-to-r from-teal-500  to-purple-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md m-2'
        >
          Read more
        </Link>
      </div>
    </div>
  );
}


// import { Link } from 'react-router-dom';

// export default function PostCard({ post }) {
//   return (
//     <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
//       <Link to={`/post/${post.slug}`}>
//         <img
//           src={post.image}
//           alt='post cover'
//           className='h-[260px] w-full object-cover transition-all duration-300 z-20'
//         />
//       </Link>
//       <div className='p-3 flex flex-col gap-2'>
//         <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
//         <p className='text-gray-600 text-sm line-clamp-3'>
//           {post.content ? post.description : 'This post covers important insights and valuable information that can help you stay informed and inspired. Dive into the details to discover new perspectives and engage with our community.'}
//         </p>
//         <Link
//           to={`/post/${post.slug}`}
//           className='z-10 absolute bottom-2 left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md m-2'
//         >
//           Read article
//         </Link>
//       </div>
//     </div>
//   );
// }


