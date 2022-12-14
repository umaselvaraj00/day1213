import React from 'react'
import { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";

export default function Custom() {
    const userData=["abc","bcd","cde","def","efg"];
      const [user,setUser]=useState(new Set());
  useEffect(()=>{
    localStorage.setItem('form',JSON.stringify(user));
  }, [user]);
  function createList() {
    return userData.map((users, key) => (
      
      <Form.Check
        disabled={user.size > 1 && !user.has(users)}
        key={key}
        value={users}
        label={users}
        onChange={handleChange}
      />
    ));
  }
  function handleChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setUser((c) => new Set([...c, value]));
    } else {
      setUser((c) => new Set([...c].filter((x) => x !== value)));
    }
  }
  // function onChange(e){
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempUser = user.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setUser(tempUser);
  //   } else {
  //     let tempUser = user.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUser(tempUser);
  //   }

  // }
 
return (
    <div className="app">
    {/* <input type="checkbox" className="form1" name="allSelect"  handleChange={onChange}/> */}
        <label className="form2" >Any two</label>
    {createList()}
    </div>
   
  )
}
