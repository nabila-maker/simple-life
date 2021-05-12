/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import image from "../../static/images.jpeg"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        
      }
    }
  `)

  const avatarUrl = author?.avatar?.url
const name ='Drole de dames'
const description=' Drole de dames are frontend developers and trainers. They go Jamstack with WordPress. Come and join them.'
  return (
    
    <div className="bio">
    <img src= {image} />

      {author?.firstName && (
        <p>
          Written by <strong>{name}.</strong>
          {` `}
          {description}
        
        </p>
      )}
    </div>
  )
}

export default Bio
