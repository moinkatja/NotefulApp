<<<<<<< HEAD
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import AddFolder from "../AddFolder/AddFolder";
import AddNote from "../AddNote/AddNote";
import ApiContext from '../ApiContext';
import config from '../config';
import './App.css';
<<<<<<< HEAD
=======
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
<<<<<<< HEAD
                this.setState({ notes, folders });
            })
            .catch(error => {
                console.error({ error });
=======
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
            });
    }

    addFolder = folder => {
        this.setState({
<<<<<<< HEAD
            folders: [...this.state.folders, folder],
        })
    }

    addNote = note => {
        this.setState({
            notes: [...this.state.notes, note],
        })
    }
=======
          folders: [...this.state.folders, folder],
        })
      }

    addNote = note => {
        this.setState({
          notes: [...this.state.notes, note],
        })
      }
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
    handleDeleteNote = noteId => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    };

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                ))}
<<<<<<< HEAD
                <Route path="/note/:noteId" component={NotePageNav} />
                <Route path="/add-folder" component={NotePageNav} />
                <Route path="/add-note" component={NotePageNav} />
=======
                <ErrorBoundary><Route path="/note/:noteId" component={NotePageNav} /></ErrorBoundary>
                <ErrorBoundary><Route path="/add-folder" component={NotePageNav} /></ErrorBoundary>
                <ErrorBoundary><Route path="/add-note" component={NotePageNav} /></ErrorBoundary>
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
            </>
        );
    }

<<<<<<< HEAD

=======
    
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
    renderMainRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListMain}
                    />
                ))}
<<<<<<< HEAD
                <Route path="/note/:noteId" component={NotePageMain} />
                <Route path="/add-folder" component={AddFolder} />
                <Route path="/add-note" component={AddNote} />
=======
                <ErrorBoundary><Route path="/note/:noteId" component={NotePageMain} /></ErrorBoundary>
                <ErrorBoundary><Route path="/add-folder" component={AddFolder} /></ErrorBoundary>
                <ErrorBoundary><Route path="/add-note" component={AddNote} /></ErrorBoundary>
>>>>>>> 0330a561bc6e4c5c0ea5f03b15f36d2a131eb3e7
            </>
        );
    }



    render() {
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
            addFolder: this.addFolder,
            deleteNote: this.handleDeleteNote
        };
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                            <FontAwesomeIcon icon="check-double" />
                        </h1>
                    </header>
                    <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
