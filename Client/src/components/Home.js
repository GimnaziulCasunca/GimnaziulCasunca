// HomePage.js
import React, { useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export const Home = () => {
    const [searchIDNP, setSearchIDNP] = useState('');
    const [searchedStudent, setSearchedStudent] = useState(null);
    const [searchError, setSearchError] = useState('');
  
    const ShowElev = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`/elev/${searchIDNP}`);
        setSearchedStudent(response.data);
        setSearchError('');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setSearchError('Student not found');
        } else {
          setSearchError('Server error');
        }
        setSearchedStudent(null);
      }
    };

    
return (
 <div>
    <Link to = "/login" class="home"><button><h3><b>Log In</b></h3></button></Link>
     <div class = "login-box">
      <h2>Search Elev:</h2>
      <form onSubmit={ShowElev}>
        <div class="user-box">
          <label>Search IDNP:</label>
            <input type="text" value={searchIDNP} onChange={(e) => setSearchIDNP(e.target.value)} />
        </div>
        <button type="submit" class="btn">Search</button>
        
      </form>

        {searchError && <p>{searchError}</p>}
        {searchedStudent && (searchedStudent.Class === 7 ||searchedStudent.Class === 8 ||searchedStudent.Class === 9)  && (
        <div class="info">
          <h2>Elev Details:</h2>
          <p>IDNP: {searchedStudent.IDNP}</p>
          <p>Name: {searchedStudent.Name}</p>
          <p>Surname: {searchedStudent.Surname}</p>
          <p>Class: {searchedStudent.Class}</p>
          <p>Limba și literatura română: {searchedStudent.Romana}</p>
          <p>Eng/Fr: {searchedStudent.Engleza}</p>
          <p>Rusa: {searchedStudent.Rusa}</p>
          <p>Matematica: {searchedStudent.Mate}</p>
          {/* <p>Stiinte: {searchedStudent.Stiinte}</p> */}
          <p>Biologia: {searchedStudent.Biologia}</p>
          <p>Fizica: {searchedStudent.Fizica}</p>
          <p>Chimia: {searchedStudent.Chimia}</p>
          <p>Informatica: {searchedStudent.Info}</p>
          <p>Istoria: {searchedStudent.Istoria}</p>
          <p>Geografia: {searchedStudent.Geografia}</p>
          <p>Optional: {searchedStudent.Optional}</p>
        </div>)}
    
      {searchedStudent && searchedStudent.Class === 6 && (
        <div class="info">
          <h2>Elev Details:</h2>
          <p>IDNP: {searchedStudent.IDNP}</p>
          <p>Name: {searchedStudent.Name}</p>
          <p>Surname: {searchedStudent.Surname}</p>
          <p>Class: {searchedStudent.Class}</p>
          <p>Limba și literatura română: {searchedStudent.Romana}</p>
          <p>Eng/Fr: {searchedStudent.Engleza}</p>
          <p>Rusa: {searchedStudent.Rusa}</p>
          <p>Matematica: {searchedStudent.Mate}</p>
          {/* <p>Stiinte: {searchedStudent.Stiinte}</p> */}
          <p>Biologia: {searchedStudent.Biologia}</p>
          <p>Fizica: {searchedStudent.Fizica}</p>
          {/* <p>Chimia: {searchedStudent.Chimia}</p>
          <p>Informatica: {searchedStudent.Info}</p>*/}
          <p>Istoria: {searchedStudent.Istoria}</p>
          <p>Geografia: {searchedStudent.Geografia}</p> 
          <p>Optional: {searchedStudent.Optional}</p>
        </div>)}
    
      {searchedStudent && searchedStudent.Class === 5 && (
        <div class="info">
          <h2>Elev Details:</h2>
          <p>IDNP: {searchedStudent.IDNP}</p>
          <p>Name: {searchedStudent.Name}</p>
          <p>Surname: {searchedStudent.Surname}</p>
          <p>Class: {searchedStudent.Class}</p>
          <p>Limba și literatura română: {searchedStudent.Romana}</p>
          <p>Eng/Fr: {searchedStudent.Engleza}</p>
          <p>Rusa: {searchedStudent.Rusa}</p>
          <p>Matematica: {searchedStudent.Mate}</p>
          <p>Stiinte: {searchedStudent.Stiinte}</p> 
          {/* <p>Biologia: {searchedStudent.Biologia}</p>
          <p>Fizica: {searchedStudent.Fizica}</p> */}
          {/* <p>Chimia: {searchedStudent.Chimia}</p>
          <p>Informatica: {searchedStudent.Info}</p>*/}
          <p>Istoria: {searchedStudent.Istoria}</p>
          <p>Geografia: {searchedStudent.Geografia}</p> 
          <p>Optional: {searchedStudent.Optional}</p>
        </div>)}

     </div>
         
</div>   
);

};

export default Home;
