import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import classes from './AddNote.module.css';
import PropTypes from 'prop-types';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            modified: "",
            content: "",
            folderId: ""
        };
    }

    nameChanged(name) {
        this.setState({
            name
        });
    }

    contentChanged(content) {
        this.setState({
            content
        });
    }

    folderChanged(folderId) {
        this.setState({
            folderId
        });
    }

    selectFolder = () => {
        const folderDetails =
            this.context.folders.map(folder => {
                return (
                    <option key={folder.id} value={folder.id}>{folder.name}</option>
                )
            })
        return folderDetails;

    }

    handleAddNote = (e) => {
        e.preventDefault();
        const note =
        {
            name: e.target["note-name"].value,
            content: e.target["note-content"].value,
            folderId: e.target["note-folder"].value,
            modified: new Date()
        }
        console.log(note);
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note),

        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                else return res.json();
            })
            .then(note => {
                console.log(note);
                this.props.history.push('/', note);
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
            <div>
                <h2>Add Note</h2>
                {error}
                <form onSubmit={e => this.handleAddNote(e)}>
                    <input
                        type="text"
                        id="note-name"
                        value={this.state.name}
                        placeholder="Enter the title of your note"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    <textarea
                        type="text"
                        id="note-content"
                        value={this.state.content}
                        placeholder="Enter the content"
                        onChange={e => this.contentChanged(e.target.value)}
                        required />
                    <label>Select the folder</label>
                    <div className={classes.CustomSelect}>
                    <select
                        id="folderId"
                        name="note-folder"
                        value={this.state.folderId}
                        onChange={e => this.folderChanged(e.target.value)}
                    >
                        {this.selectFolder()}

                    </select>
                    </div>
                    <button className={classes.AddButton} type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

AddNote.contextType = ApiContext;

AddNote.propTypes = {
    name: PropTypes.string,
    modified: PropTypes.instanceOf(Date),
    content: PropTypes.string,
    folderId: PropTypes.string
}


export default AddNote;
