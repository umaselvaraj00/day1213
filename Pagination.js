import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Pagination() {
    const[value,setValue]=useState([]);
    const[search,setSearch]=useState("");
    // const[filtered,setFilterd]=useState([]);
    const[sorted,setSorted]=useState("");
    const [number, setNumber] = useState(1); 
    const[postPerPage]=useState(10);
    useEffect(()=>{
        axios.get("http://localhost:4000/pagination")
        .then(response=>{
         setValue(response.data);
         console.log(response.data);
        //  setFilterd(value.filter(data=>{return data.name.toLowerCase().includes(search.toLowerCase());}))
        });
    },[search,value]);
    const lastPage = number * postPerPage;
    const firstPage = lastPage - postPerPage;
    const currentPage = value.slice(firstPage, lastPage);
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(value.length / postPerPage); i++) {
        pageNumber.push(i);
      }
   
    const changePage = (pageNumber) => {
        setNumber(pageNumber);
      };
    
    const handleSort =async(e)=>{
        let val=e.target.value;
        setSorted(val);
        return await axios.get('http://localhost:4000/pagination')
        .then((response)=>{
            setSorted(response.data);
        })
        .catch((e)=>console.log(e));
    }
    const handleSubmit=(e)=>{
        if(e.target.value===''){
            setSearch(search)
        }else{
            const result=search.filter(x=>x.name.toLowerCase().includ(e.target.value.toLowerCase()))
            setValue(result)
        }
        setSearch(e.target.value)
    };
return (
    <div>
    <h5>Sort</h5>
    <select select onChange={handleSort} value={sorted}>
    <option disabled value='none'>sort</option>
    <option value='id' >Id</option>
    <option value='name'>Name</option>
    <option value='age'>Age</option>
    </select>
    <button onChange={handleSubmit}>Search</button>
    <input type="text" placeholder="search here..." value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    <table>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {currentPage.map((value,index)=>(
            <tr key={index}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
           
        </tr>
        ))}
           
         </tbody>
        </table>
            <button onClick={()=>setNumber(number-1)}>Previous</button>
            {pageNumber.map((ele)=>{
                return(<button onClick={()=>changePage(ele)}>{ele}</button>
                );
            })}
            <button onClick={()=>setNumber(number+1)}>Next</button>
        </div>
        
  )
}

