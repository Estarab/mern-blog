// src/pages/PostPage.jsx

import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug, stakeholderName } = useParams(); // Adjusted to include stakeholderName
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setPost(data.posts[0]);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    // Fetch post by slug or fetch posts by stakeholder if slug is not present
    if (stakeholderName) {
      // Fetch posts by stakeholder
      const fetchStakeholderPosts = async () => {
        try {
          const res = await fetch(`/api/post/getposts?stakeholder=${stakeholderName}`);
          const data = await res.json();
          if (res.ok) {
            setRecentPosts(data.posts);
          }
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchStakeholderPosts();
    } else {
      fetchPost();
    }
  }, [postSlug, stakeholderName]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  }

  if (error) {
    return <div>Error loading content.</div>;
  }

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      {post ? (
        <>
          <h1 className='text-3xl mt-10 p-3 text-center font-serif lg:text-4xl'>
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className='mt-10 p-3 max-h-[600px] w-full object-cover'
          />
          <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span className='italic'>{(post.content.length / 1000).toFixed(0)} mins read</span>
          </div>
          <div
            className='p-3 max-w-2xl mx-auto w-full post-content'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <CommentSection postId={post._id} />
        </>
      ) : (
        <div className='flex flex-col justify-center items-center mb-5'>
          <h1 className='text-xl mt-5'>Recent articles by {stakeholderName}</h1>
          <div className='flex flex-wrap gap-5 mt-5 justify-center'>
            {recentPosts && recentPosts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}



// import { Button, Spinner } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
// import CommentSection from '../components/CommentSection';
// import PostCard from '../components/PostCard';

// export default function PostPage() {
//   const { postSlug } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [post, setPost] = useState(null);
//   const [recentPosts, setRecentPosts] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
//         const data = await res.json();
//         if (!res.ok) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setPost(data.posts[0]);
//         setLoading(false);
//       } catch {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchPost();
//   }, [postSlug]);

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       try {
//         const res = await fetch(`/api/post/getposts?limit=3`);
//         const data = await res.json();
//         if (res.ok) {
//           setRecentPosts(data.posts);
//         }
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
//     fetchRecentPosts();
//   }, []);

//   if (loading)
//     return (
//       <div className='flex justify-center items-center min-h-screen'>
//         <Spinner size='xl' />
//       </div>
//     );

//   return (
//     <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
//       <h1 className='text-3xl mt-10 p-3 text-center font-serif lg:text-4xl'>
//         {post?.title}
//       </h1>
//       <div className='flex justify-between items-center mb-5'>
//         {/* Add filter, search, and sort here */}
//         {/* <input type='text' placeholder='Search...' className='border border-gray-300 rounded p-2' />
//         <Button color='gray' size='sm'>Sort</Button> */}
//       </div>
//       <img
//         src={post?.image}
//         alt={post?.title}
//         className='mt-10 p-3 max-h-[600px] w-full object-cover'
//       />
//       <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
//         <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
//         <span className='italic'>
//           {post && (post.content.length / 1000).toFixed(0)} mins read
//         </span>
//       </div>
//       <div
//         className='p-3 max-w-2xl mx-auto w-full post-content'
//         dangerouslySetInnerHTML={{ __html: post?.content }}
//       />
//       <CommentSection postId={post?._id} />
      
//       <div className='flex flex-col justify-center items-center mb-5'>
//         <h1 className='text-xl mt-5'>Recent articles</h1>
//         <div className='flex flex-wrap gap-5 mt-5 justify-center'>
//           {recentPosts && recentPosts.map(post => (
//             <PostCard key={post._id} post={post} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }


