import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div className='mt-10'>
                <h1 className='mb-3 text-3xl  font-bold'>What are the difference between Controlled and Uncontrolled Component?</h1>
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
                <h1 className='mb-3 text-3xl  font-bold'>How to validate React props using PropTypes</h1>
                <div>
                    <h3>React PropType Validator</h3>
                    <p>The PropTypes utility exports a wide range of validators for configuring type definitions.There are basic, renderable, instance, multiple, collection and required prop types validators available</p>
                    <h4>Basic Type</h4>
                    <p>
                        <li>PropTypes.any</li>
                        <li>PropTypes.bool</li>
                        <li>PropTypes.number</li>
                        <li>PropTypes.string</li>
                        <li>PropTypes.function</li>
                        <li>PropTypes.array</li>
                        <li>PropTypes.object</li>
                        <li>PropTypes.symbol</li>
                    </p>
                    <h4>Render Type</h4>
                </div>
            </div>
        </div>
    );
};

export default Blog;