import React from 'react';
import Image from './image.jsx';

const Gallery = (props) => (
  <div>
    <div id="gallery">
      {props.images.map((image, index) => (
        <Image
          key={index}
          image={image}
        />
      ))}
    </div>
    <br/>
    <div id="paginate">
      <button onClick={props.pageLeft}>Previous</button>
      {props.page}
      <button onClick={props.pageRight}>Next</button>
    </div>
  </div>
)

export default Gallery;