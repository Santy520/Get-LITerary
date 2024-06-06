
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_TOPIC } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import PostForm from '../components/PostForm';

const TopicDetails = () => {
    const { id } = useParams(); // Get the topic ID from the URL parameters
    const { loading, data, error } = useQuery(GET_TOPIC, {
        variables: { id },
    });

    const [addPost] = useMutation(ADD_POST);

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (error) {
    //     console.error('Error fetching topic:', error);
    //     return <div>Error: {error.message}</div>;
    // }

    const topic = data?.topic;

    // if (!topic) {
    //     return <div>No topic found</div>;
    // }

    const handleAddPost = async (content) => {
        try {
            await addPost({
                variables: {
                    topicId: id,
                    // authorId: "665e215946e13a1e4a9b8c07", // Replace this with the actual author ID
                    content,
                },
                refetchQueries: [{ query: GET_TOPIC, variables: { id } }],
            });
        } catch (err) {
            console.error('Error adding post:', err);
        }
    };

    return (
        <div>
            <h1>{topic.title}</h1>
            <div>
                <p><strong>Club:</strong> {topic.clubId.name}</p>
                {topic.bookId && <p><strong>Book:</strong> {topic.bookId.title}</p>}
                {/* Render other topic details if needed */}
            </div>
            <PostForm addPost={handleAddPost} /> 

            {
                topic.posts.map(post => {
                    return (
                        <div>
                            <h4>{post.content}</h4>
                            <h5>{post.authorId.name}</h5>
                            <h5>{post.createdAt}</h5>
                            <hr/>
                        </div>
                    )
                })
            }
           
        </div>
    );
};

export default TopicDetails;
