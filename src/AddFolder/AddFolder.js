import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import classes from "./AddFolder.module.css";

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    nameChanged(name) {
        this.setState({
            name
        });
    }

    handleAddFolder = (e) => {
        e.preventDefault();
        const folder =
        {
            name: e.target["folder-name"].value
        }
        console.log(folder);
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(folder),

        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                else return res.json();
            })
            .then(folder => {
                this.context.addFolder(folder);
                this.props.history.push(`/`);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    render() {

        const error = this.state.error
            ? <div>{this.state.error}</div> : "";
        return (
            <div className={classes.FormFolder}>
                <h2>Add folder</h2>
                {error}
                <form onSubmit={e => this.handleAddFolder(e)}>
                    <input
                    className={classes.FolderInput}
                        type="text"
                        id="folder-name"
                        value={this.state.name}
                        placeholder="Enter the name of folder"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    <button className={classes.AddButton} type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

AddFolder.contextType = ApiContext

export default AddFolder;
