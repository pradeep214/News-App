import React from 'react'

function NewsItem({title,decription , src, url}) {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-4 ms-5 mx-4 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px",width:"332px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{decription}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem