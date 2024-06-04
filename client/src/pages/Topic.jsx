import { useQuery } from '@apollo/client';
import { GET_TOPICS } from '../utils/queries';

const Topics = () => {
    const { loading, data, error } = useQuery(GET_TOPICS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching topics:', error);
        return <div>Error: {error.message}</div>;
    }

    try {
        const topics = data?.topics || [];

        if (topics.length === 0) {
            return <div>No topics available</div>;
        }

        return (
            <div>
                <h1>This is the topics page</h1>
                <ul>
                    {topics.map((topic) => (
                        <li key={topic.id}>
                            <h2>{topic.title}</h2>
                            <p>Club: {topic.clubId?.name || 'N/A'}</p>
                            <p>Book: {topic.bookId?.title || 'N/A'}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (err) {
        console.error('Unexpected error:', err);
        return <div>Error: Something went wrong while rendering the topics.</div>;
    }
};

export default Topics;
