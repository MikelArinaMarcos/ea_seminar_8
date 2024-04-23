import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { User } from "../modules/user";
import './getUser.css'
import axios from "axios";

interface Props {
    user: User | null;
}

function PropExemple({ user }: Props) {

    return (
        <div className="user-details">
            {user ? (
                <div>
                    <h2>User Details:</h2>
                    <form>
                        <input type="text" placeholder={user ? user.name.first_name.toString() : ''}/>
                        <input type="text" placeholder={user ? user.name.middle_name.toString() : ''}/>
                        <input type="text" placeholder={user ? user.name.last_name.toString() : ''}/>
                        <input type="text" placeholder={user ? user.email.toString() : ''}/>
                        <input type="text" placeholder={user ? user.phone_number.toString() : ''}/>
                        <input type="text" placeholder={user ? user.gender.toString() : ''}/>
                    </form>
                </div>
            ) : (
                <p>Please select a user from the table.</p>
            )}
        </div>
    );
}

export default PropExemple;