import React from 'react'


class UsersClass extends React.Component {
    constructor() {
        super()
        this.state = {users: []};
    }

    async getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
          })
          .then((users) => {
            this.setState({ users: users });
          });
    }

    componentDidMount(){
        this.getUsers();
    }


    render(){
        return(
            <>
            {this.state.users.map((user) => {
                
                return (
                    <div key={user.id}>
                        <>
                        <h2>{user.name}</h2>
                        <h2>{user.username}</h2>
                        <h2>{user.email}</h2>
                        </>
                    </div>
                )
                    
            })}
            </>
        );
    }
}

export default UsersClass;