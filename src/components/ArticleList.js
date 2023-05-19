import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
	const articles = posts.map(({ id, title, date, preview, minutes }) => (
		<Article
			key={id}
			title={title}
			date={date}
			preview={preview}
			minutes={minutes}
		/>
	));

	return <main>{articles}</main>;
};

export default ArticleList;
