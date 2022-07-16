import { useEffect, useState } from "react";

export const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(res);

            if (!res.ok) {
                throw new Error(JSON.stringify(res));
            }

            const data = await res.json();
            setPosts(data)
        })()
    }, [])
    console.log(posts);

    return (
      <div className="main">
          <div className="container">
            <h1 className="text-center mb-5 mt-2 text-info">POSTS</h1>
                {posts.map(post => (
                    <li className="text-center border w-50 mx-auto p-2 list-unstyled mb-3">
                        <h3 className="" key={post.id}>{post.title}</h3>
                        <p className="text-truncate">{post.body}</p>
                    </li>
                ))}
          </div>
      </div>
    );
};