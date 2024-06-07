import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TOPICS } from '../utils/queries';
import { ADD_TOPIC } from '../utils/mutations';

const Topic = () => {
    const { loading, data, error, refetch } = useQuery(GET_TOPICS);
    const [addTopic] = useMutation(ADD_TOPIC);
    const [title, setTitle] = useState('');
    const [clubId, setClubId] = useState('');
    const [bookId, setBookId] = useState('');

    const handleCreateTopic = async (e) => {
        e.preventDefault();
        try {
            await addTopic({
                variables: { clubId, title, bookId },
            });
            setTitle('');
            setClubId('');
            setBookId('');
            refetch(); // Refetch the topics after adding a new one
        } catch (err) {
            console.error('Error creating topic:', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching topics:', error);
        return <div>Error: {error.message}</div>;
    }

    const topics = data?.topics || [];

    return (
        <div>
            <h1>This is the topics page</h1>
            <form onSubmit={handleCreateTopic}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Club ID"
                    value={clubId}
                    onChange={(e) => setClubId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Book ID"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    required
                />
                <button type="submit">Create Topic</button>
            </form>
            <div>
                {topics.length === 0 ? (
                    <div>No topics available</div>
                ) : (
                    topics.map((topic) => (
                        <a href={`/topic/${topic.id}`} key={topic.id}>
                            <div>
                                <h2>{topic.title}</h2>
                                <p>Club: {topic.clubId.name}</p>
                                <p>Book: {topic.bookId.title}</p>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
};

export default Topic;