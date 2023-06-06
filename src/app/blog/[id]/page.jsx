import React from 'react';
import { notFound } from 'next/navigation';

const getData = async (id) => {
  // the return is not serialized
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const Post = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div>{data.title}</div>
  )
}

export default Post