import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const Blog = () => {
    const ref = useRef()
    return (
        <div className='my-container relative'>
        <div ref={ref}>
        <div className='mt-10'>
                <h1 className='mb-3 text-3xl  font-bold'>1. What are the difference between Controlled and Uncontrolled Component?</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full ">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Controlled Component</th>
                                <th>Uncontrolled Component</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Value Management </td>
                                <td>Managed by React State</td>
                                <td>Managed by component's own internal state</td>
                            </tr>
                            {/* row 2 */}
                            <tr >
                                <td>User Interaction</td>
                                <td>Parent component updates state on user interaction</td>
                                <td>Component updates Own internal state on user interaction</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Data Flow</td>
                                <td>Data Flows parent component to component</td>
                                <td>Data Flows within the component</td>
                            </tr>
                            {/* row 4 */}

                            <tr>
                                <td>Debugging</td>
                                <td>Easier to debug</td>
                                <td>More difficult to debug </td>
                            </tr>
                            {/* row 4 */}

                            <tr>
                                <td>Code Complexity </td>
                                <td>Less Complex Code</td>
                                <td>More Complex Code </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='py-10'>
                <h1 className='mb-3 text-3xl  font-bold'>2. How to validate React props using PropTypes?</h1>
                <div>
                    <h3 className='title-text'>React PropType Validator</h3>
                    <p>The PropTypes utility exports a wide range of validators for configuring type definitions.There are basic, renderable, instance, multiple, collection and required prop types validators available</p>
                   <div className='grid grid-cols-3 gap-10 mt-8'>
                   <div>
                   <h4 className='title-text'>Basic Type</h4>
                    <p> <span>Bellow are the validators for the basic data type</span>
                        <li>PropTypes.any</li>
                        <li>PropTypes.bool</li>
                        <li>PropTypes.number</li>
                        <li>PropTypes.string</li>
                        <li>PropTypes.function</li>
                        <li>PropTypes.array</li>
                        <li>PropTypes.object</li>
                        <li>PropTypes.symbol</li>
                    </p>
                   </div>
                    <div>
                    <h4 className='title-text'>Renderable Type</h4>
                    <p>
                        <span>
                            PropTypes also exports the following validators to endure that React can render the value passed to a porp.
                            <li>PropTypes.node</li>
                            <li>PropTypes.element</li>
                        </span>
                    </p>
                    </div>
                    <div>
                    <h4 className='title-text'>Instance Type</h4>
                    <p>
                        <span>
                            In Case where we require prop to be an instance of a particular javascript class.
                            <li>PropTypes.instanceOf</li>
                        </span>
                    </p>
                    </div>
                    <div>
                    <h4 className='title-text'>Multiple Type</h4>
                    <p>
                        <span>
                            PropTypes also exports validators that can allow a limited set of values or multiple sets of data types for a prop.
                            <li>PropTypes.oneOf</li>
                            <li>PropTypes.oneOfType</li>
                        </span>
                    </p>
                    </div>
                    <div>
                    <h4 className='title-text'>Collection Type</h4>
                    <p>
                        <span>
                           In addition to the PropType.array and PropType.object validators, PorpTypes also provide validators for more fine-tuned validation of arrays and objects. 
                            <li>PropTypes.arrayOf</li>
                            <li>PropTypes.objectOf</li>
                        </span>
                    </p>
                    </div>
                   </div>

                </div>
            </div>
            <div className='py-10 '>
                <h2 className='title-text mb-6'>3. Difference between Node.js and Express.js?</h2>
                   <div className='grid grid-cols-2'>
                   <div>
                    <h3 className='title-text'>Express.js</h3>
                    <ul>
                    <li>It is used to build web-apps using approaches snd principles of Node.js.</li>
                    <li>More Feature than node.js</li>
                    <li>It is build on node.js</li>
                    <li>Write on JavaScript</li>
                    <li>Framework based on Node.js </li>
                    <li>Controllers are provided </li>
                    <li>Routing is provided</li>
                    <li>It requires less coding time</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className='title-text'>Node.js</h3>
                    <ul>
                    <li>It is used to build server-side, input-output event-driven apps</li>
                    <li>Fewer Feature </li>
                    <li>It is build on Google's V8 engine</li>
                    <li>Write on C, C++, JavaScript</li>
                    <li>Run Time platform or environment designed for server-side execution of Javascript</li>
                    <li>Controllers are not provided </li>
                    <li>Routing is not provided</li>
                    <li>It requires more coding time</li>
                    </ul>
                    </div>
                   </div>
            </div>
            <div className='py-10'>
                <h3 className='title-text mb-6'>4. What is a custom hook and Why will we create a Custom Hooks?</h3>
                <p>
                    <span className='title-text'>Custom Hook:</span> Custom Hooks are reusable function. When we have component logic thats needs to be used by multiple components, we can extract that logic to a custom Hooks. Custom Hooks start with "use". Example: useFetch.
                </p>
                <p>
                    Custom Hooks offer three major benefits over standard library hooks:
                </p>
                <p><span className='title-text'>Reusability:</span> Custom Hooks offer reusability as when a custom hook is created, it can be reused easily, when makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook dose not need to be rendered again and again while rendering the whole code.</p>
                <p><span className='title-text'>Readability:</span> Instead of using High-Order Components, one can use custom hooks to improve the readability of the code. Complex code can become hard to read if layers of providers surround the components, consumers, HOCs, render, props and other abstractions, generally known as wrapper hell. On the other hand, using custom hooks can provide a cleaner logic and a better way to understand the relationship between data and the component.</p>
                <p><span className='title-text'>Testability:</span> Teh test containers and the presentational components are test separately in React. This is not a trouble when it comes to unit tests. But, if a container contains several HOCs, it becomes difficult as you will have to test the containers and teh components together to do the integration tests. Using custom Hooks, this problem can be eliminated as the hooks allow to combine containers and components into one component. It also makes it easier to write separate unit tests for custom hooks. Using custom hooks also makes it easier to mock hooks when compared to mock HOCs as it is similar to mocking a function    </p>
            </div>
        </div>
        <div className='absolute -top-[85px] right-0'>
            <ReactToPrint 
            trigger={() => <button className='py-1 px-2 rounded text-white bg-[#1ecb71] text-sm capitalize font-bold'>Print Blog</button>}
            content={() => ref.current}
            ></ReactToPrint>
        </div>
        </div>
    );
};

export default Blog;