import {useState} from "react";

export default function Fcomponent(){

    let [list, setlist] = useState([  {
        name: "Tran Anh",
        age: 24
    },
        {
            name: "Linh Thuy",
            age: 20
        }])
    let [name, setName] = useState('');
    let [age, setAge] = useState('')
    return (
        <>
            {list.map((item, index) =>(
                <h2 key={index}>{item.name}, {item.age}</h2>
            ))}
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) =>{
                setName(e.target.value);
            }}/>
            <input type="text" value={age} onChange={(e) =>{
                setAge(e.target.value);
            }}/>
            <button onClick={()=>{
                setlist([...list,{
                    name: name,
                    age: age
                }])
                setName('');
                setAge('')
            }}>Add</button>
        </>
    )
}