import React, { Component } from 'react';
import config from '../config';
import ApiContext from '../ApiContext';
import classes from "./AddFolder.module.css";
import PropTypes from 'prop-types';
import ValidationError from "../ValidationError/ValidationError";

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                touched: false,
            },
        }
    }

    nameChanged(name) {
        this.setState({ name: { value: name, touched: true } });

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
                        value={this.state.name.value}
                        placeholder="Enter the name of folder"
                        onChange={e => this.nameChanged(e.target.value)}
                        required />
                    {this.state.name.touched && (
                        <ValidationError message={this.validateName()} />
                    )}
                    <button className={classes.AddButton} type="submit" disabled={
                        this.validateName()}>ADD</button>
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
