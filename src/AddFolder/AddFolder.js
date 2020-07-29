import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import classes from "./AddFolder.module.css";
import PropTypes from 'prop-types';
<<<<<<< HEAD
import ValidationError from "../ValidationError/ValidationError";
=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            name: {
                value: "",
                touched: false,
            },
        }
    }

    nameChanged(name) {
        this.setState({ name: { value: name, touched: true } });

=======
            name: "",
        };
    }

    nameChanged(name) {
        this.setState({
            name
        });
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
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

<<<<<<< HEAD
    validateName() {
        const valid= /[^a-zA-Z0-9]/g;

        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length <= 3) {
            return 'Name must be at least 3 characters long';
        } else if (name.length > 15) {
            return 'Name must be maximun 15 characters long';
        } else if (valid.test(name)) {
            return "Only letters and numbers are allowed!";
        }
    }

=======
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
    render() {

        const error = this.state.error
            ? <div>{this.state.error}</div> : "";
        return (
            <div className={classes.FormFolder}>
                <h2>Add folder</h2>
                {error}
                <form onSubmit={e => this.handleAddFolder(e)}>
                    <input
<<<<<<< HEAD
                        className={classes.FolderInput}
                        type="text"
                        id="folder-name"
                        value={this.state.name.value}
                        placeholder="Enter the name of folder"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    {this.state.name.touched && (
                        <ValidationError message={this.validateName()} />
                    )}
                    <button className={classes.AddButton} type="submit" disabled={
                        this.validateName()}>ADD</button>
=======
                    className={classes.FolderInput}
                        type="text"
                        id="folder-name"
                        value={this.state.name}
                        placeholder="Enter the name of folder"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    <button className={classes.AddButton} type="submit">ADD</button>
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
                </form>
            </div>
        )
    }
}

AddFolder.propTypes = {
    name: PropTypes.string,
}

AddFolder.contextType = ApiContext

export default AddFolder;
