import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PaginatedItems} from "./components/PaginatedItems";
import {useEffect, useState} from "react";

export default function Home() {
    const [posts, setPosts] = useState([])

    const getDataAPI = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data)
        //return data
    }

    useEffect(() => {
        getDataAPI()
    }, [])

    return (
        <div>
             <PaginatedItems data={posts}/>
            {/*{posts.map((el,index)=>{*/}
            {/*    return(*/}
            {/*        <div key={el.id}>*/}
            {/*            <span> {el.id} - </span>*/}
            {/*            <span> {el.title}</span>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}

            {/*{console.log(posts)}*/}
        </div>



    )
}
