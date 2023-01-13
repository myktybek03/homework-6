import React from "react"
import Card from "../UI/card/Card"
import classes from "./UserList.module.css"

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users
          .sort((a, b) => {
            return a["age"] < b["age"] ? -1 : ""
          })
          .map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  )
}

export default UsersList
