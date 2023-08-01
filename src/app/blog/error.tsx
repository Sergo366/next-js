"use client"

import React from 'react';

const ErrorWrapper = ({error}: {error: Error}) => {
	return (
		<h1>
			Ooppps!!! {error}
		</h1>
	);
};

export default ErrorWrapper;
