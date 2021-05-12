import React from 'react';

import { Link, useStaticQuery, graphql } from "gatsby"


const Navigation = () => {
    
 
    const data = useStaticQuery(graphql`

    query MyQuery {
        wpMenu(name: {eq: "main"}) {
          menuItems {
            nodes {
              url
              label
              id
            }
          }
        }
    }
        `)
      console.log(data)
      const menuItems= data.wpMenu.menuItems.nodes
      console.log(menuItems)


    return (
        <nav className="navigation">
        <ul>
        {menuItems.map(el =>{
            return  <li><Link key={el.id} to={el.url}>{el.label}</Link></li>
        })}

        </ul>
            
        </nav>
    );
};

export default Navigation;