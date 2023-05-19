import { useRouter } from 'next/router'
import React from 'react'

const Movies = () => {
    const router=useRouter()
    const { slugs=[] }=router.query
    console.log(slugs)
    if(slugs.length===3){
        return (
            <h1>It's belongs to {slugs[0]} , {slugs[1]} and {slugs[2]}</h1>
          )
    }
    else if(slugs.length==2){
        return (
            <h1>It's belongs to {slugs[0]} and {slugs[1]}</h1>
          )
    }
    else if(slugs.length==1){
        return (
            <h1>It's belongs to {slugs[0]} </h1>
          )
    }
    else{
        return <h1>Course's page</h1>
    }
}

export default Movies