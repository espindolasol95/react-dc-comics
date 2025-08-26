import React from 'react'
import comics from './comics';
import ComicCard from './ComicCard';



const ComicList = () => {
  return (
    <div className='comic-list'>
      {comics.map(comic => (
        <ComicCard 
          key={comic.id} 
          title={comic.title} 
          thumb={comic.thumb} 
          series={comic.series} 
        />
      ))}
    </div>
  )
}

export default ComicList;
