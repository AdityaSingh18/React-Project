import Card from '../UI/Card';
import classes from '../Users/AddUser.module.css'
const UsersList = (props) =>{


    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>{
                <li>
                    {user.name}({user.age} Years old)
                </li>
            })}
        </ul>
        </Card>
    )

}

export default UsersList;