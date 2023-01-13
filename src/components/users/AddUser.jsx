import React, { useState } from "react"
import Card from "../UI/card/Card"
import Button from "../UI/buttons/Button"
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername && enteredAge) {
      props.onAddUser(enteredUsername, enteredAge)
      setEnteredUsername("")
      setEnteredAge("")
    }
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  )
}

export default AddUser
