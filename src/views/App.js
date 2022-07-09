import React, { useState } from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import FormFinder from './components/FormFinder';
function App() {
  const getGithubUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
        } else {
          alert('User not found');
        }
      });
  }
  const [user, setUser] = useState({})
  return (
    <React.Fragment>
      <Header title="Github Finder" />
      <div className="container">
        <div className="form-container mt-3">
          <FormFinder getGithubUser={getGithubUser} />
        </div>
        <div className="grid gap-4 grid-cols-1 place-items-center">
          {
            user.id > 0 &&
            <UserCard user={user} />
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
