import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDetail =()=>{
const [search, setSearch] =useState('');
const [record, setRecord] = useState([]);
const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    salary: '',
});

const {fname, lname, email, phone, salary} = user;

// const onInputChange = (e)=>{
//     setUser({...user, [e.target.name]: e.target.value })
// }

// const loadEmployeeDetail = async ()=>{
//     const res = fetch('').then(res=>res.json).then(json=> setRecord(json))
// }

useEffect(()=>{
// loadEmployeeDetail();
}, [])

// const submitEmployeeRecord = async (e)=>{
//     e.preventDefault();
//     e.target.reset();
//     await axios.post('', user);
//     alert('data inserted');
//     loadEmployeeDetail();
// }

// const searchRecord = ()=>{
//     alert(search);
//     axios.get('').then(res =>{
//         setRecord(res.data)
//     })
// }

// const deleteRecord = (prdId)=>{
//   axios.delete('').then(result =>{
//     loadEmployeeDetail();
//    })
// }

    return(
      <section>
        <h1>hello</h1>
        <nav class = 'navbar navbar-expand-lg navbar-light bg-dark'>
            <div class='collapse navbar-collapse'>

            </div>
        </nav>
      </section>
    )
}

export default EmployeeDetail;