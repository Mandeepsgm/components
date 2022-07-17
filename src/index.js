import { faker } from '@faker-js/faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail author="Alex" timeAgo="Today at 4:45PM" content="Nice Blog Post!!" avatar={faker.image.avatar()} />
           <CommentDetail author="Sam" timeAgo="Today at 5:45PM" content="This is nice!!" avatar={faker.image.avatar()} />
           <CommentDetail author="John" timeAgo="Today at 7:00PM" content="WOOOWWW!!" avatar={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));