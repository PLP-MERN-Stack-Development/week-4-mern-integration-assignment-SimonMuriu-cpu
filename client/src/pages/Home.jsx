import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
    return (
        <div>
            <section className="text-center p-10">
                <h1 className="text-4xl text-zinc-950 dark:text-amber-300 font-bold mb-4" >Welcome to MERN Blog</h1>
                <p className="text-xl text-blue-950 dark:text-indigo-50 ">MERN Blog covers a wide range of articles, tutorils, resources, and news updates on MERN 
                    (MongoDB database, Express.js, React.js, and Node.js)</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                <Card>
                    <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white mb-4">About Mern Blog</h2>
                    <p className="text-zinc-950 dark:text-gray-300 mb-4">MERN Blog is a project by full stack MERN developers sharing knowledge, experiences, and updates.
                        You can learn more about MERN Blog, it's mission and vission statements, and how you can become a member </p>
                    <Button variant="primary">Learn more here...</Button>
                </Card>
                <Card>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                        Explore Blog Categories
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Click to see the latest blog posts and categories classified by topics</p>
                    <Button variant="secondary">Explore Blogs</Button>
                </Card>
                <Card>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Top Bloggers and Tutors</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Get familiar with the top contributors on MERN Blog</p>
                    <Button variant="primary">See Bloggers</Button>
                </Card>
            </section>
        </div>
    );
};

export default Home;