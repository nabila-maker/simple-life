import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from './navigation'
import logo from '../../static/image.png'


const Header = props => {
    const {isHomePage} = props
    const data = useStaticQuery(graphql`
      query LayoutQuery {
        wp {
          generalSettings {
              description
           

            
          }
        }
      }
    `)
    console.log(data)
    const description = data.wp.generalSettings.description
  
    const title = data.wp.generalSettings.title
    return (
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <header className="global-header">
          {isHomePage ? (
            <img src={logo} className="main-heading LOGO"></img>
            
          ) : (
            <Link className="header-link-home" to="/">
              {title}
             
            </Link>
          )}
          
          <Navigation/>
        </header>
        
  
        {/* <main>{children}</main> */}
  
       
      </div>
    )
  }
  export default Header;