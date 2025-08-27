import React from 'react'



const ComicList = ({comics}) => {
  return(
  <div className='container1'>
    <div className="comics-button">
         <button>Current Series</button>
       </div>

     <div className='row'>
      {comics.map((comic) => (
      <div className='col-16 ' key={comic.id}> 
       <div className='comic-card'>
         <img 
         src={comic.thumb}
         alt={comic.title} 
         />
         <h3>{comic.title}</h3>
        </div>
      </div>
      ))}
      <div className="load-more">
      <button>Load More</button>
    </div>

    </div>
  </div>
 );




};

export default ComicList;
 
