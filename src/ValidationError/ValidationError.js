import React from 'react';
import classes from "./ValidationError.module.css";

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className={classes.Error}>* {props.message}</div>
    );
  }

  return <></>
}