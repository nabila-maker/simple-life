import React from "react";
import {useStaticQuery,graphql,Link} from "gatsby"

const RecentPosts =()=>{//,sort: {order: DESC}
    const data=useStaticQuery(graphql`
    query QueryPosts {
        allWpPost( limit: 3) {
            edges {
              node {
                id
                uri
                title
              }
            }
          }
      }`)
          
          const list=data.allWpPost.edges
          console.log(list)
    return(
<div >
    <h2>Recent Posts</h2>
    <ul>
        {list.map(el=>{
            return <li><Link key={el.node.id} to={el.node.uri}>{el.node.title}</Link></li>
        })} 
    </ul>
</div>
    )
}

export default RecentPosts