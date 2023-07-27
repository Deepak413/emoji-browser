import React from 'react';
// import apiData from './data';


function Card(props) {
    // console.log(props);

    //to convert emoji's htmlCode string to HTML
    const createMarkup = () => {
        return { __html: props.htmlCode };
    };

    

    return (
        <div className='cards'>
            <div className="card">
                <p className='emoji_pic' dangerouslySetInnerHTML={createMarkup()} />
                <h2>Name : {props.name}</h2>
                <p>Category : {props.category}</p>
                <p>Group : {props.group}</p>
                <p>Unicode : {props.unicode}</p>
            </div>
        </div>
    );
}

export default Card;