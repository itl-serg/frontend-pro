import React from "react";

import BucketIcon from "../../assets/icons/iconBucket.png";
import "./ListItem.css";

export class ListItem extends React.Component {
    render() {
        return (
            <div className="item-wrapper">
                <input type="checkbox" checked={this.props.data.done} />
                <div className="item-text">{this.props.data.title}</div>
                <img className="bucket-icon" src={BucketIcon} alt="bucket icon" />
            </div>
        );
    }
}
