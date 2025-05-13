import { normalize, schema } from 'normalizr';
import { GetPost } from '../../api/posts';
import { useEffect } from 'react';

export function Post() {
    useEffect(() => {
        const loadPosts = async () => {
            const posts = await GetPost();
            return posts;
        };

        loadPosts().then((posts) => {
            const author = new schema.Entity('authors');
            const post = new schema.Entity('posts', { author });
            const normalizedData = normalize(posts, [post]);
            console.log('Normalized Data:', normalizedData);
        })
    }, []);

    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}