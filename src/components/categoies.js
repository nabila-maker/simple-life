import React from "react";
import {useStaticQuery,graphql,Link} from "gatsby"

const Categories =()=>{
    const data=useStaticQuery(graphql`
    query QueryCategories {
        allWpCategory {
          nodes {
            id
            uri
            name
          }
        }
      
      }`)
          
          const categories=data.allWpCategory.nodes
          console.log(categories)
    return(
<div >
    <h2>Categories</h2>
    <ul>
        {categories.map(el=>{
            return <li><Link key={el.id} to={el.uri}>{el.name}</Link></li>
        })} 
    </ul>
</div>
    )
}

export default Categories