import React from "react";
import "./ListItem.css";

const BucketIcon = require("../../assets/icons/icon-bucket.png");

export class ListItem extends React.Component {
    render() {
        return (
            <div className="item-wrapper">
                <div className="item-text">Create application</div>
                <img className="bucket-icon" src={BucketIcon} alt="bucket icon" />
            </div>
        );
    }
}
