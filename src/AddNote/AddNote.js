import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import classes from './AddNote.module.css';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import ValidationError from "../ValidationError/ValidationError";
=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            name: {
                value: "",
                touched: false,
            },
            modified: {
                value: "",
                touched: false,
            },
            content: {
                value: "",
                touched: false,
            },
            folderId: {
                value: "",
                touched: false,
            },
=======
            name: "",
            modified: "",
            content: "",
            folderId: ""
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
        };
    }

    nameChanged(name) {
<<<<<<< HEAD
        this.setState({ name: { value: name, touched: true } });

    }

    contentChanged(content) {
        this.setState({ content: { value: content, touched: true } });
=======
        this.setState({
            name
        });
    }

    contentChanged(content) {
        this.setState({
            content
        });
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
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
<<<<<<< HEAD

=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
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

<<<<<<< HEAD
    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length <= 3) {
            return 'Name must be at least 3 characters long';
        } else if (name.length > 10) {
            return 'Name must be maximun 10 characters long';
        }
    }

    validateContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'Content is required';
        } else if (content.length > 100) {
            return 'Content must be maximum 100 characters long';
        } 
    }


=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
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
<<<<<<< HEAD
                        value={this.state.name.value}
                        placeholder="Enter the title of your note"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    {this.state.name.touched && (
                        <ValidationError message={this.validateName()} />
                    )}

                    <textarea
                        type="text"
                        id="note-content"
                        value={this.state.content.value}
                        placeholder="Enter the content"
                        onChange={e => this.contentChanged(e.target.value)}
                        required />
                      {this.state.name.touched && (
                        <ValidationError message={this.validateContent()} />
                    )}    
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
                    <button className={classes.AddButton} type="submit" disabled={
                        this.validateName() ||  this.validateContent() }>ADD</button>
=======
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
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
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
