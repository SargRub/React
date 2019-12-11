import React from "react";
import "./ListItem.css";

const ListItem = ({ list }) => {

    const color = list.isDone ? "#00FF3A" : "black";

    const styleData = { color };

    return (
        <li style={{ "listStyletype": "none", }}>
            <span style={styleData}>
                {list.title}
            </span>
            <section className = "buttons">
                <button className="btn btn-danger">
                    <i className="fa fa-remove"></i>
                </button>
                <button className="btn btn-success">
                    <i className="fa fa-check"></i>
                </button>
            </section>

        </li>
    );
};

export default ListItem;