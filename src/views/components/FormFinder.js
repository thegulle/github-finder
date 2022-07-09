import React, { Component } from 'react';

class FormFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'thegulle'
        };
    }
    render() {
        const handleFindAccount = (e) => {
            e.preventDefault();
            if (this.state.username !== '') {
                this.props.getGithubUser(this.state.username);
            } else {
                alert('Please enter a username');
            }
        }
        return (
            <form onSubmit={handleFindAccount}>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-500">Please enter github username</label>
                    <input type="text" id="large-input" name="findUsername"
                        onChange={(e) => this.setState({ username: e.target.value })}
                        value={this.state.username}
                        className="block w-full p-2 border
                            dark:placeholder-gray-400 dark:text-dark focus:outline-0" />
                </div>
            </form>
        );
    }
}

export default FormFinder;
