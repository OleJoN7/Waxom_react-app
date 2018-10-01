import React from 'react';
import Container from '../../../Components/Container/Container';
import PostsSlider from '../../../Components/PostsSlider/PostsSlider';

const Posts = ({posts}) => {
    return (
        <section className="posts">
            <Container>
                <h2 className="posts__header">Recent Posts.</h2>
                <p className="posts__text">Investigationes demonstraverunt lectores legere me lius quod ii legunt
                    saepius.
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
                <PostsSlider posts={posts}/>
            </Container>
        </section>
    )
};

export default Posts;