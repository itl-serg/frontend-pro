import React from "react";

import BucketIcon from "../../assets/icons/iconBucket.png";
import "./ListItem.css";

export function ListItem({ data, removeTask, markTodoDone }) {
    return (
        // сделать верстку
        <div className={`${data.done ? "item-wrapper-done" : "item-wrapper"} active`}>
            <input type="checkbox" checked={data.done} onChange={() => markTodoDone(data.id)} />
            <div className="item-text">{data.title}</div>
            <div onClick={() => removeTask(data.id)}>
                <img className="bucket-icon" src={BucketIcon} alt="bucket icon" />
            </div>
        </div>
    );
}
