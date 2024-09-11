import React, { createContext } from 'react'

const UserContext = createContext(
    {
        loggedinusername: "Ansh",
    }
)

export default UserContext;