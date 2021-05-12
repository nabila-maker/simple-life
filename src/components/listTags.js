import React from "react";
import {useStaticQuery,graphql,Link} from "gatsby"

const Tags =()=>{
    const data=useStaticQuery(graphql`
    query GetTagNodes {
        allWpTag {
            nodes {
             
              name
              id
              uri
            }
          }
        }
      `)
          
          const categories=data.allWpTag.nodes
          console.log(categories)
    return(
<div>
<h2>Tags</h2>
    <ul>
        {categories.map(el=>{
            return <li><Link key={el.id} to={el.uri}>{el.name}</Link></li>
        })} 
    </ul>
</div>
    )
}

export default Tags
