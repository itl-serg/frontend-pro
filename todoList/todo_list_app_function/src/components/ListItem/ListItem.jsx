import React from "react";

import BucketIcon from "../../assets/icons/iconBucket.png";
import "./ListItem.css";

export function ListItem({ data, removeTask }) {
    return (
        <div className="item-wrapper">
            <input type="checkbox" checked={data.done} />
            <div className="item-text">{data.title}</div>
            <div onClick={() => removeTask(data.id)}>
                <img className="bucket-icon" src={BucketIcon} alt="bucket icon" />
            </div>
        </div>
    );
}
