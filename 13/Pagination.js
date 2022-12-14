import React, { useState, useEffect } from "react";


const Pagination = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); 
  const [postPerPage] = useState(10);
  const [search,setSearch]=useState("");

  
  const getData=async()=>{
    try{
      const data = await fetch("http://localhost:4000/pagination");
      const dataJ = await data.json();
      setPost(dataJ);
      console.log(dataJ);
  
    }  catch(e){
        console.log(e)
    }
  };
  useEffect(() => {
    
    getData();
  },[]);
  
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <div>
      <div className="app">
        <div className="btn">
          <input type="text" placeholder="Search.." name="search"  onChange={(e)=>{setSearch(e.target.value);}}></input>
        </div>
        <div className="container-fluid">
            <table>
              <thead><tr>
                      <th> S No.</th>
                      <th> Name</th>
                      <th>Email</th>
                      <th> Age</th>
              </tr></thead>
              <tbody>
              {currentPost
               .filter((Val)=>{
                  if( search === "")
                  {
                    return Val;
                  }else {
                    Val.name.toLowerCase().includes(search.toLowerCase())
               }
               
                return Val;
               }).map((Val) => {
                  return (
                  <tr
                      className="border-2 border-dark text-center"
                      key={Val.id}
                    >
                      <td className="border-2 border-dark th-1">
                        {Val.id}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.name}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.email}
                      </td>
                      <td className="border-2 border-dark th-1">
                        {Val.age}
                      </td>
                    </tr>);
              })}
             </tbody>
            </table>
          <div className="my-3 text-center">
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number - 1)} >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="px-3 py-1 m-1 text-center btn-outline-dark"
                    onClick={() => ChangePage(Elem)}>
                    {Elem}</button>
                </>
              );
            })}
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Pagination;
