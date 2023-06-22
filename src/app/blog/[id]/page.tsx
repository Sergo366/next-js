import React, { FC } from 'react';

type Props = {
	params: {
		id: string
	}
}

const Post:FC<Props> = ({params: { id }}) => {
	return (
		<div>
			Blog {id}
		</div>
	);
};

export default Post;
