import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState();
    const [gender, setGander] = useState();
    const[male, setMale] = useState(false);
    const[female,setFemale] = useState(false );
    const [place,setPlace] = useState();
    const [age,setAge] = useState();
    const [marrage,setMarrage] =useState();
    const [education,setEducation] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
       const body={
        name:name,
        gender:male== true ? 'male' :female== true ? 'female' : "undefine",
        place:place,
        age:age,
        marrage:marrage,
        education:education,
       }
       console.log(body)
       if (body.name && body.gender && body.place && body.age && body.marrage && body.education ){
        alert("submitation is successful")
       }
       else {
        alert("incomplete details")
       }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Survey</h1>
                <h1>name</h1>
                <input type='text' placeholder='name' value={name} onChange={(e) =>setName(e.target.value)} />
                <h1 >Gender</h1>
               
                <input type='radio' className='ganesh' checked={male == true && female == false ? true :false}  onChange={(e)=>{setMale(true);setFemale(false)}} />
                <label>Male</label>
                <input type='radio' className='ganesh' checked={male == false && female == true ? true :false } onChange={(e)=>{setMale(false);setFemale(true)}} />
                <label>Female</label>
                
                
                <h2>age</h2>
                <input type="number" value={age} onChange={(e) =>setAge(e.target.value)} />

                <h1>Place</h1>
                <select value={place} onChange={(e) =>setPlace(e.target.value)}>
                    <option>Kakinda</option>
                    <option>nidadavolu</option>
                    <option>Tadepalligudam</option>
                    <option>Tanku</option>
                    <option>kovvuru</option>
                    <option>eluru</option>
                </select>
                <h1>Marrage status</h1>
                <select value={marrage} onChange={(e) =>setMarrage(e.target.value)}>
                    <option>on select </option>
                    <option>unmarried</option>
                    <option>married</option>
                </select>
                <h1>Education</h1>
               <input type='text' placeholder='Education' value={education} onChange={(e) =>setEducation(e.target.value)} />
                 <br/>
                <button type='submit' >submit</button>

            </form>
        </div>
    )
}
export default Home;