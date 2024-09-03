import { useEffect, useState } from "react";

const Product = ({item}) => {
    return (
        <div className="card">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} width="200" height="300"></img>
            <p>{item.description}</p>
            <h4>R${item.price}</h4>
            <h3>{item.rating.rate} com {item.rating.count} votos</h3>
        </div>
    )
}

function Products(){
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async  () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok){
                throw new Error('Network failed');
            }
            const result = await response.json();
            setData(result);
        }
        fetchData();
    }, [])

    if(!data){
        return <div>Carregando...</div>
    }
        
    return(
        <div>
            {data.map((item, index) => (
                <Product key={index} item={item}/>
            ))}
        </div>
    );
}

export default Products