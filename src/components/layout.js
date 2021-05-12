import React from 'react';
import Categories from './categoies';
import Footer from './footer';
import Header from './header';
import Tags from './listTags';


import RecentPosts from './rescentPosts';


const layout = ({isHomePage,children} ) => {

  

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
               
    <Header isHomePage={isHomePage}/>
    <div className="contenu">
    <main>{children}</main>
    <div className="sideBar">
<Categories/>
<Tags/>
<RecentPosts/>
    </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default layout;



