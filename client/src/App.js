import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import StoryCard from './components/storyCard/StoryCard';

function App() {
	// locals
	const [stories, setStories] = useState([]);

	// effects
	useEffect(() => {
		fetchStories();
	}, [])

	// functions
	const fetchStories = async () => {
		const response = await axios.get('http://localhost:8000/topStories');
		setStories(response.data);
	}

	return (
		<div className='main'>
			<h1>NYT Top Stories</h1>
			<div className="grid">
				{stories.map((story, index) =>
					<StoryCard
						key={index}
						title={story.title}
						url={story.url}
						img={story.multimedia[0].url}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
