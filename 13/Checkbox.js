import React, { useEffect, useState } from 'react'

export default function Checkbox() {
    const userData=[
    { name: " abc" },
    { name: "bcd" },
    { name: "cde" },
    { name: "def" },
    { name: "efg" }
  ];
  const [user,setUser]=useState(userData);
  useEffect(()=>{
    localStorage.setItem('form',JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = user.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUser(tempUser);
    } else {
      let tempUser = user.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUser(tempUser);
    }
  };
return (
  <div>
    <form className="app">
    <input type="checkbox" className="form1" name="allSelect" checked={!user.some((user) => user?.isChecked !== true)} onChange={handleChange}/>
             <label className="form2">All Select</label>
             {user.map((user, index) => (<div className="form-check" key={index}>
    <input type="checkbox" className="form3" name={user.name} checked={user?.isChecked || false} onChange={handleChange}/>
            <label className="form4">{user.name}</label>
          </div>
        ))}
      </form>
            </div>
           

  );
}
