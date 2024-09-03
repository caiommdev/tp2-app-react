import { useEffect, useState } from "react";

const UserData = ({item}) => {
    return (
        <div className="card">
            <h2>User</h2>
            <p>{item.username}</p>
            <p>
                Nome: {item.name.firstname}
                Sobrenome: {item.name.lastname}
            </p>
            <p>
                Email: {item.email}
            </p>
            <h2>Endereco</h2>
            <p>
                Cidade: {item.address.city}
                Rua: {item.address.street}
                Numero: {item.address.number}
                Zip-Code: {item.address.zipcode}
            </p>
        </div>
    )
}

const User = ({item}) => {
    return (
        <h2>{item.username}</h2>
    );
}

function Users(){
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async  () => {
            const response = await fetch('https://fakestoreapi.com/users');
            if(!response.ok){
                throw new Error('Network failed');
            }
            const result = await response.json();
            setData(result);
            console.log(data)
        }
        fetchData();
    }, [])

    if(!data){
        return <div>Carregando...</div>
    }
        
    return(
        <div>
            {data.map((item, index) => (
                <User key={index} item={item}/>
            ))}
        </div>
    );
}

export default Users