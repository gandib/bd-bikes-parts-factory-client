import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold mt-10 mb-5'>My Blog</h2>
            <p className='text-red-500 font-bold'>1. Question: How will you improve the performance of a React Application?</p>
            <div className='mb-5'>Answer: We can use several techniques to improve the performance of the application:
                <p>1. Use binding functions in constructors</p>
                <p>2. Avoid inline style attributes</p>
                <p>3. Avoid extra tags by using React fragments</p>
                <p>4. Avoid inline function in the render method</p>
                <p>5. Avoid bundling all of the front end code in a single file</p>
            </div>

            <p className='text-red-500 font-bold'>2. Question: What are the different ways to manage a state in a React application?</p>
            <div className='mb-5'>Answer: There are four main types of state you need to properly manage in React apps: these are Local state, Global state, Server state and URL state.
                <p>Local state: Local state is data we manage in one or another component.</p>
                <p>Global state: Global state is data we manage across multiple components.</p>
                <p>Server state: Data that comes from an external server that must be integrated with our UI state.</p>
                <p>URL state: Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>


            <p className='text-red-500 font-bold'>3. Question: How does prototypical inheritance work?</p>
            <p className='mb-5'>Answer: Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>


            <p className='text-red-500 font-bold'>4. Question: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
            <p className='mb-5'>Answer: React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.</p>


            <p className='text-red-500 font-bold'>5. Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
            <div className='mb-5'>Answer:
                <div className="mockup-code">
                    <pre data-prefix='const'>handleSearchByName = (name)</pre><pre data-prefix=' => {'></pre>
                    <pre data-prefix="const"><code>findProducts = products.filter(product <pre data-prefix='=>'></pre> product.name.toLowerCase() === name.toLowerCase());
                        setSearchedProduct(findProducts);
                        <pre data-prefix='}'></pre></code></pre>
                </div>
            </div>


            <p className='text-red-500 font-bold'>6. Question: What is a unit test? Why should write unit tests?</p>
            <p className='mb-5'>Answer: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
    );
};

export default Blog;