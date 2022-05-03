import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h1 className='mt-2'>Difference between Javascript and Node.js?</h1>
            <p>Javascript is a programming language that runs in any browser Javascript Engine. But Node JS is an interpreter or running environment for a Javascript programming language tha hole many exesses.
                <br />
                Javascript is normally used for any cliednt side for web application But Nodejs mainly used for accssing or running any operating system.
                <br />
                Javascript running in any engine like V8 Google Chrom. as a result Javascript programming is very easy to write and put any running environment browser. But Node js only support the V8 engine which googles chrome has. But whether it supports the V8 engine written JavaScript Code can able to run any environment 
                <br />

            </p>
            <h1 className='mt-2'>Differences between sql and nosql databases?</h1>
            <p>SQL database are vertically scalalble while NoSQL database are horizontally scalalble <br />
            Sql database are relational But NosQL databases are non relational
            <br />
            SQL Database are query language But NoSQL Databases have dynamic data 
            <br />
            SQL databases are vertically scalable But NoSQL dabases are document or wide colum stores
            <br />
            Sql databases are better for multi row transictions but noSQL is better for unstructured data lik documnets or JSON
            </p>
            <h1 className='mt-2'>What is the purpose of jwt and how does it work?</h1>
            <p>Jwt is JSON Web token is an open standard used to text based format for transmitting data across web applications. It stores information in an easy to access manner. <br />
            JWT differ from other web tokens in that they contain a set of clasims. Claims are used to transmit information between two parties. These claims are depends on the use case at hand. A JWT is a string made up of three pars seperated by dots and serialized using base64. In the most common serialization format, compact serializiation. That is header, payload and signature <br />
            The payload contains the claims usually containg no more than dozen fields to keep the JWT. 
            </p>
            
        </div>
    );
};

export default Blog;