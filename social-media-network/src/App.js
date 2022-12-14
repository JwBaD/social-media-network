import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {Route, Routes} from 'react-router-dom';

function App(props) {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            < Route path = "/profile"
            element = {
                < Profile profilePage = {
                  props.state.profilePage
                }
                addPost = {
                  props.addPost
                }
                newPostText = {
                  props.newPostText
                }
                updateNewPostText = {
                  props.updateNewPostText
                }
                />} / >
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
