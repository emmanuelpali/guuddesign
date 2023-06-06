import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

// const getData = async () => {
//   // the return is not serialized
//   const res = await fetch('http://localhost:3000/api/posts' );

//   if (!res.ok) {
//     throw new Error("");
//   }
//   return res.json();
// }

const Blog = async () => {
  <>
  </>
  // const data = await getData();
  // return (
  //   <div className='container'>
  //     {data.map((item) => (
  //       <div>
  //         <Link href={`/blog/${item._id}`}><h1 key={item.id}>{item.title}</h1></Link>
  //         <div className="">
  //           <Image 
  //             src={item.img}
  //             alt='item.title'
  //             width={400}
  //             height={250}
  //           />
  //         </div>
  //         <br />
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default Blog
