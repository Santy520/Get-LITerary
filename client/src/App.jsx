import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import WelcomeScreen from './pages/WelcomeScreen';
import DiscussionBoard from './pages/DiscussionBoard';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostForm from './components/PostForm';
// import Post from './components/Post';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Topic from './pages/Topic';
import TopicDetails from './pages/TopicDetails';
import Footer from './components/Footer';
// import GetAppSection from './components/GetApp'; // Import the GetAppSection component

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/WelcomeScreen" element={<WelcomeScreen />} />
        <Route exact path="/Discussion" element={<DiscussionBoard />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/PostForm" element={<PostForm />} />
        {/* <Route exact path="/Post" element={<Post />} /> */}
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Topic" element={<Topic />} />
        <Route exact path="/Topic/:id" element={<TopicDetails />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for undefined paths */}
      </Routes>
      {/* <GetAppSection />  */}
      <Footer />
    </ApolloProvider>
  );
}

export default App;
