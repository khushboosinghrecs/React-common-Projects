import React, {useEffect, useState} from "react";

const UserFetchingComponent = ({userId}) =>{
    const [userDat, seUserData] = useState(null);
    const fetchUserDetail= async ()=>{
        try{
            const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.data();
            seUserData(data);
        }catch(err){
            console.log('Error fetching data', err)
        }
    }


    useEffect(()=>{
        fetchUserDetail();
        return ()=>{
            console.log('component will unmount or userId will change')
        }
    }, [userId])
    return (
        <div>
          {userData ? (
            <div>
              <h2>User Data:</h2>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              {/* Render other user data as needed */}
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      );
}