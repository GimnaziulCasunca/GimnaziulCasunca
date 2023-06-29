import React, { useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
let FinToken = localStorage.getItem('token')


export const AddStudentForm = () => {
  const [IDNP, setIdnp] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Surname, setSurname] = React.useState('');
  const [Class, setClass] = React.useState('');
  const [Romana, setRomana] = React.useState('');
  const [Mate, setMate] = React.useState('');
  const [Info, setInfo] = React.useState('');
  const [Istoria, setIstoria] = React.useState('');
  const [Geografia, setGeografia] = React.useState('');
  const [Chimia, setChimia] = React.useState('');
  const [Fizica, setFizica] = React.useState('');
  const [Ed_Fiz, setEd_Fiz] = React.useState('');
  const [Franceza, setFranceza] = React.useState('');
  const [Engleza, setEngleza] = React.useState('');
  const [Biologia, setBiologia] = React.useState('');
  const [Rusa, setRusa] = React.useState('');
  const [studentsData, setStudentsData] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [searchIDNP, setSearchIDNP] = useState('');
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [findStudent, setFindStudent] = useState(null);
  const [searchError, setSearchError] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  // let Obiecte = {Romana, Mate, Info, Istoria, Geografia, Chimia, Fizica, Ed_Fiz, Franceza, Engleza, Biologia, Rusa}
  
  let message = "";
    // adaugarea unui nou elev
    const AddStudent = async (e) => {
      e.preventDefault();
      if(FinToken){
        try {
          message = "";
          const studentData = { IDNP, Name, Surname, Class, Romana, Mate, Info, Istoria, Geografia, Chimia, Fizica, Ed_Fiz, Franceza, Engleza, Biologia, Rusa  };
          const response = await axios.post('/newstud', studentData);
          console.log(response.data); // Success message from the server
          setIdnp('');
          setName('');
          setSurname('');
          setClass('');
          setRomana('');
          setMate('');
          setInfo('');
          setIstoria('');
          setGeografia('');
          setChimia('');
          setFizica('');
          setEd_Fiz('');
          setFranceza('');
          setEngleza('');
          setBiologia('');
          setRusa('');
          message = "Student successfully added.";
          alert(message);
        } catch (error) {
          message = "There was a problem adding the elev or elev existe.";
          alert(message);
          }
      }else 
        {
          message = "Please login";
          alert(message);
        }
    };

  // Toti elevii 
  const ShowElevi = async (e) => {
    e.preventDefault();
    if(FinToken){
      try {
          const studentData = { IDNP, Name, Surname, Class, Romana, Mate, Info, Istoria, Geografia, Chimia, Fizica, Ed_Fiz, Franceza, Engleza, Biologia, Rusa };
          const response = await axios.get('/elevi', studentData);
          setStudentsData(response.data); 
          setResponseMessage(''); 
        }
        catch (error) {
        console.error('Error creating elev:', error.message);
      }
    }else 
      {
        message = "Please login";
        alert(message);
      }
  };

 //Un elev dupa idnp
  const ShowElev = async (e) => {
    e.preventDefault();
    if(FinToken){
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
    }
    else 
      {
        message = "Please login";
        alert(message);
      }
  };

 //Un elev in input pentru a putea modifica 
  const FindElev = async (e) => {
    e.preventDefault();
    if(FinToken){
      try {
        const response = await axios.get(`/elev/${IDNP}`);
        const elev = response.data;
        setFindStudent('');
        setName(elev.Name);
        setSurname(elev.Surname);
        setClass(elev.Class);
        setRomana(elev.Romana);
        setMate(elev.Mate);
        setInfo(elev.Info);
        setIstoria(elev.Istoria);
        setGeografia(elev.Geografia);
        setChimia(elev.Chimia);
        setFizica(elev.Fizica);
        setEd_Fiz(elev.Ed_Fiz);
        setFranceza(elev.Franceza);
        setEngleza(elev.Engleza);
        setBiologia(elev.Biologia);
        setRusa(elev.Rusa);
        setSearchError('');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setSearchError('Student not found');
        } else {
          setSearchError('Server error');
        }
        setFindStudent(null);
      } 
    }
    else 
      {
        message = "Please login";
        alert(message);
      }
  };
  
  //modificarea elev 
  const ModifyElev = async (e) => {
    e.preventDefault();
    if(FinToken){
      try {
        message = "";
        const studentData = { IDNP, Name, Surname, Class, Romana, Mate, Info, Istoria, Geografia, Chimia, Fizica, Ed_Fiz, Franceza, Engleza, Biologia, Rusa };
        const response = await axios.put(`/modstud/${IDNP}`, studentData);
        console.log(response.data); // Success message from the server
        setIdnp('');
        setName('');
        setSurname('');
        setClass('');
        setRomana('');
        setMate('');
        setInfo('');
        setIstoria('');
        setGeografia('');
        setChimia('');
        setFizica('');
        setEd_Fiz('');
        setFranceza('');
        setEngleza('');
        setBiologia('');
        setRusa('');
        message = "Student successfully modify.";
        alert(message);
      } catch (error) {
        message = "There was a problem modify the elev.";
        alert(message);
      }
    }else 
    {
      message = "Please login";
      alert(message);
    }


  };

  let del = "";
  const DelElev = async (e) => {
    e.preventDefault();
    if(FinToken){
      try {
        del = prompt("Are you sure you want to delete the elev (y,n)?");
        if(del==='y') { 
          const response = await axios.delete(`/delstud/${IDNP}`);
          alert("Elev is deleted succes");
          console.log(response.data); // Success message from the server
          setResponseMessage('Student deleted successfully.'); // Update the response message
        }
        else{
          alert("Student wasn't deleted");
        }
      } catch (error) {
        alert("Eror");
        console.error('Error deleting student:', error.message);
        setResponseMessage('There was a problem deleting the student.'); // Update the response message
      }
    }else 
    {
      message = "Please login";
      alert(message);
    }

  };
  
  const getStudentsByClass = async () => {
    if(FinToken){
      try {
        const response = await axios.get(`/getclass?class=${selectedClass}`);
        setStudentsData(response.data);
        setResponseMessage('');
      } catch (error) {
        console.error('Error fetching students by class:', error.message);
      }
    }else 
    {
      message = "Please login";
      alert(message);
    }
  };

  const logout = async () => {
      try {
        localStorage.setItem('token', '')
        console.log(localStorage.getItem('token'))
      } catch (error) {
        console.error('Error', error.message);
      }
  };


  return (

    <div>
      
      <Link to = "/"><button class="home"><h3><b>Home</b></h3></button></Link>
      <Link to = "/login"><button onClick={logout} class="logout"><h3><b>LogOut</b></h3></button></Link>
      
    <div class = "login-box">
      <form class="modify">
      <h2>Add/Modify elev:</h2>
        <label>
          IDNP:
          <input type="text" value={IDNP} onChange={(e) => setIdnp(e.target.value)} />
        </label>
        <br />
        <button onClick={FindElev}>Find</button>
        <button onClick={DelElev}>Delete</button>
        <br />
        <label>
          Name:
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" value={Surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <br />
        <label>
          Class:
          <input type="text" value={Class} onChange={(e) => setClass(e.target.value)} />
        </label>
        <br />
        <label>
          Romana:
          <input type="text" value={Romana} onChange={(e) => setRomana(e.target.value)} />
        </label>
        <label>
          Matematica:
          <input type="text" value={Mate} onChange={(e) => setMate(e.target.value)} />
        </label>
        <br />
        <label>
          Info:
          <input type="text" value={Info} onChange={(e) => setInfo(e.target.value)} />
        </label>
        <br />
        <label>
          Istoria:
          <input type="text" value={Istoria} onChange={(e) => setIstoria(e.target.value)} />
        </label>
        <br />
        <label>
          Geografia:
          <input type="text" value={Geografia} onChange={(e) => setGeografia(e.target.value)} />
        </label>
        <br />
        <label>
          Chimia:
          <input type="text" value={Chimia} onChange={(e) => setChimia(e.target.value)} />
        </label>
        <br />
        <label>
          Fizica:
          <input type="text" value={Fizica} onChange={(e) => setFizica(e.target.value)} />
        </label>
        <br />
        <label>
          Ed. Fizica:
          <input type="text" value={Ed_Fiz} onChange={(e) => setEd_Fiz(e.target.value)} />
        </label>
        <br />
        <label>
          Franceza:
          <input type="text" value={Franceza} onChange={(e) => setFranceza(e.target.value)} />
        </label>
        <br />
        <label>
          Engleza:
          <input type="text" value={Engleza} onChange={(e) => setEngleza(e.target.value)} />
        </label>
        <br />
        <label>
          Biologia:
          <input type="text" value={Biologia} onChange={(e) => setBiologia(e.target.value)} />
        </label>
        <br />
        <label>
          Rusa:
          <input type="text" value={Rusa} onChange={(e) => setRusa(e.target.value)} />
        </label>
        <br />
      </form>
      <button onClick={ShowElevi}>Show All</button>
      <button onClick={ModifyElev}>Modify</button>
      <button onClick={AddStudent}>Add Elev</button><br />

      <h2>Search Elev:</h2>
      <form onSubmit={ShowElev} class = "search">
        <label>
          By IDNP:
          <input type="text" value={searchIDNP} onChange={(e) => setSearchIDNP(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form><br/>
      
      
      {findStudent }
      {findStudent && (
        setName(findStudent.Name),
        setSurname(findStudent.Surname),
        setClass(findStudent.Class),
        setRomana(findStudent.Romana),
        setMate(findStudent.Mate),
        setInfo(findStudent.Info),
        setIstoria(findStudent.Istoria),
        setGeografia(findStudent.Geografia),
        setChimia(findStudent.Chimia),
        setFizica(findStudent.Fizica),
        setEd_Fiz(findStudent.Ed_Fiz),
        setFranceza(findStudent.Franceza),
        setEngleza(findStudent.Engleza),
        setBiologia(findStudent.Biologia),
        setRusa(findStudent.Rusa)
      )}


      <div>
       <label class = "search">
        Select Class: 
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">All</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select> <br/>
          <button onClick={getStudentsByClass}>Get Students by Class</button>
      </label>
      <ul>
      </ul>
     </div>
    </div>
    {searchError && <p>{searchError}</p>}
      {searchedStudent && (
        <div class="elevdet">
          <h2>Elev Details:</h2>
          <p>IDNP: {searchedStudent.IDNP}</p>
          <p>Name: {searchedStudent.Name}</p>
          <p>Surname: {searchedStudent.Surname}</p>
          <p>Class: {searchedStudent.Class}</p>
          <p>Limba și literatura română: {searchedStudent.Romana}</p>
          <p>Matematica: {searchedStudent.Mate}</p>
          <p>Informatica: {searchedStudent.Informatica}</p>
          <p>Istoria: {searchedStudent.Istoria}</p>
          <p>Geografia: {searchedStudent.Geografia}</p>
          <p>Chimia: {searchedStudent.Chimia}</p>
          <p>Fizica: {searchedStudent.Fizica}</p>
          <p>Ed.Fizica: {searchedStudent.Ed_Fiz}</p>
          <p>Franceza: {searchedStudent.Franceza}</p>
          <p>Engleza: {searchedStudent.Engleza}</p>
          <p>Biologia: {searchedStudent.Biologia}</p>
          <p>Rusa: {searchedStudent.Rusa}</p>
          
        </div>
      )}

      <p>  {responseMessage}</p>
      {studentsData.length > 0 && (
        <div class="search">
          <h2>Elevi:</h2>
          <ol>
            {studentsData.map((student, index) => (
              <li key={index}>
                IDNP: {student.IDNP} <br/>
                Name: {student.Name} <br/>
                Surname: {student.Surname}<br/>
                Class: {student.Class} <br/> 
                Romana: {student.Romana} <br/> 
                Matematica: {student.Mate} <br/>
                Info: {student.Info} <br/>
                Istoria: {student.Istoria} <br/>
                Geografia: {student.Geografia} <br/>
                Chimia: {student.Chimia} <br/>
                Fizica: {student.Fizica} <br/>
                Ed_Fiz: {student.Ed_Fiz} <br/>
                Franceza: {student.Franceza} <br/>
                Engleza: {student.Engleza} <br/>
                Biologia: {student.Biologia} <br/>
                Rusa: {student.Rusa} <br/>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default AddStudentForm;
