import React, { Component } from 'react';

class Gallery extends Component {
    state = {  } 
    render() { 
        //console.log(this.props.items);

        return (
            <div>
            {
                this.props.items.map((item, index) => {
                    let {title,subtitle,authors,description,imageLinks,infoLink} = item.volumeInfo;
                    console.log(item.volumeInfo);
                    return (
                        <div className='Item'>
                            <div key = {index} id="booook">
                                <div id ="titles">
                                    <h2>{title}</h2>
                                    <a href={infoLink} ><img alt = "nope"  src={imageLinks !== undefined ? imageLinks.thumbnail : "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"}></img></a>
                                </div>
                                
                                
                                <div id="desc">
                                    <h4>{subtitle}</h4>
                                    <h6>Written By: {authors}</h6>    
                                    <p>{description}</p>    
                                </div>
                                
                                </div>
                        </div>)
                })
            }
        </div>
        );
    }
}
 
export default Gallery;