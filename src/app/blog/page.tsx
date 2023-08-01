import React from 'react';
import Link from 'next/link';

async function getData () {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')

	return response.json()
}

const Blog = async () => {
	const posts = await getData() as any

	return (
		<>
			Blog page
			<ul>
				{posts.map((post: any) => {
					return <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
				})}
			</ul>
		</>
	);
};

export default Blog;
