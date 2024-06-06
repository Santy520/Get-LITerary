// this page renders all the topics

import { useQuery } from '@apollo/client';
import { GET_TOPICS } from '../utils/queries';

const Topic = () => {
    const { loading, data, error } = useQuery(GET_TOPICS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching topics:', error);
        return <div>Error: {error.message}</div>;
    }

    const topics = data?.topics || [];

    if (topics.length === 0) {
        return <div>No topics available</div>;
    }

    return (
        <div>
            <h1>This is the topics page</h1>
            <div>
                {topics.map((topic) => (
                    <a href={`/topic/${topic._id}`}>
                        <div key={topic._id}>
                            <h2>{topic.title}</h2>
                            <p>Club: {topic.clubId.name}</p>
                            <p>Book: {topic.bookId.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Topic;
