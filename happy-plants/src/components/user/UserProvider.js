import React, { useRef } from 'react'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const activeUserId = parseInt(localStorage.getItem("app_user_id"))
    console.log(activeUserId)
    const [users, activeUser, setUsers, setActiveUser] = useState([])

    const getUsers = () => {
        return fetch('http://localhost:8088/users')
            .then(res => res.json())
            .then(setUsers)
    }

    const getActiveUser = () => {
        return fetch(`http://localhost:8088/users/${activeUserId}`)
            .then(res => res.json())
            .then(setActiveUser)
    }

    return (
        <UserContext.Provider value={{
            users, activeUser, getUsers, getActiveUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}