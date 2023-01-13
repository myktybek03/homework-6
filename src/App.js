import React, { useEffect, useState } from "react"
import AddUser from "./components/users/AddUser"
import UsersList from "./components/users/UserList"

const url = localStorage.getItem("todos")
function App() {
  const [userList, setUserList] = useState([])
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ]
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(userList))
  }, [userList])

  useEffect(() => {
    setUserList(JSON.parse(url))
  }, [])
  return (
    <div>
      <AddUser onAddUser={addUserHandler} key="add-user" />
      <UsersList users={userList} key="use-list" />
    </div>
  )
}

export default App
