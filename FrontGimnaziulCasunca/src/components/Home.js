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
        {searchedStudent && (
          <div class="info">
            <p>IDNP: {searchedStudent.IDNP}</p>
            <p>Name: {searchedStudent.Name}</p>
            <p>Surname: {searchedStudent.Surname}</p>
            <p>Class: {searchedStudent.Class}</p>
            <p>Româna: {searchedStudent.Romana}</p>
            <p>Matematica: {searchedStudent.Mate}</p>
            <p>Informatica: {searchedStudent.Informatica}</p>
            <p>Istoria: {searchedStudent.Istoria}</p>
            <p>Geografia: {searchedStudent.Geografia}</p>
            <p>Chimia: {searchedStudent.Chimia}</p>
            <p>Fizica: {searchedStudent.Fizica}</p>
            <p>Ed.Fizica: {searchedStudent.Ed_Fizica}</p>
            <p>Franceza: {searchedStudent.Franceza}</p>
            <p>Engleza: {searchedStudent.Engleza}</p>
            <p>Biologia: {searchedStudent.Biologia}</p>
            <p>Rusa: {searchedStudent.Rusa}</p>

          </div>
        )}
     </div>
         
</div>   
);

};

export default Home;
