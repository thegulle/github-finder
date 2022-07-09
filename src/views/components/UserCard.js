import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        const { avatar_url, name, bio, public_repos, followers, following } = this.props.user;
        return (
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-indigo-500">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" alt="banner" />
                <div className="flex justify-center -mt-8">
                    <img src={avatar_url} alt="avatar"
                        className="w-20 rounded-full border-solid border-white border-2 mt-3" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-sm bold font-sans">{name}</h3>
                    <p className="mt-2 font-sans font-light text-white">{bio}</p>
                </div>
                <div className="flex justify-center pb-3 text-white">
                    <div className="text-center mr-3 border-r pr-3">
                        <h2>{following}</h2>
                        <span>Following</span>
                    </div>
                    <div className="text-center mr-3 border-r pr-3">
                        <h2>{followers}</h2>
                        <span>Followers</span>
                    </div>
                    <div className="text-center">
                        <h2>{public_repos}</h2>
                        <span>Repos</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserCard;
