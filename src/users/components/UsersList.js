import React from "react";

import UsersItem from "./UserItems";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";
const UsersList = (props) => {
  if (!props.item || props.item.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.item.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
