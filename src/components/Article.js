import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
	let timeIndicators = "";

	if (minutes < 30) {
		const fives = Math.ceil(minutes / 5);
		timeIndicators = "☕️".repeat(fives);
	} else {
		const tens = Math.ceil(minutes / 10);
		timeIndicators = "🍱".repeat(tens);
	}

	return (
		<article>
			<h3>{title}</h3>
			<small>
				{date} {timeIndicators} {minutes} read
			</small>
			<p>{preview}</p>
		</article>
	);
};

export default Article;
