import React from "react";


 

const Schedule: React.FC = () => {

    return (

        <div>

            <h1>Bye</h1>

            <table className="table table-hover table-bordered">

                <thead>

                    <tr>

                        <th scope="col">Round</th>

                        <th scope="col">Game</th>

                        <th scope="col">Location</th>

                        <th scope="col">Date</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <th rowSpan={4}>17</th>

                        <td rowSpan={4}>Archery</td>

                        <td rowSpan={4}>India</td>

                    </tr>

                    <tr>

                        <td>19 September</td>

                    </tr>

                    <tr>

                        <td>20 September</td>

                    </tr>

                    <tr>

                        <td>21 September</td>

                    </tr>

                    <tr>

                        <th scope="row">18</th>

                        <td>Football</td>

                        <td>Saudi Arabia</td>

                        <td>3-5 October</td>

                    </tr>

                    <tr>

                        <th scope='row'>19</th>

                        <td>Boxing</td>

                        <td>United States of America</td>

                        <td>8-11 October</td>

                    </tr>

                </tbody>

            </table>


 

            <table className="table">

                <thead>

                    <tr>

                        <th scope="col">#</th>

                        <th scope="col">First</th>

                        <th scope="col">Last</th>

                        <th scope="col">Handle</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <th scope="row">1</th>

                        <td>Mark</td>

                        <td>Otto</td>

                        <td>@mdo</td>

                    </tr>

                    <tr>

                        <th scope="row">2</th>

                        <td>Jacob</td>

                        <td>Thornton</td>

                        <td>@fat</td>

                    </tr>

                    <tr>

                        <th scope="row">3</th>

                        <td colSpan={2}>Larry the Bird</td>

                        <td>@twitter</td>

                    </tr>

                </tbody>

            </table>

        </div>

    )

}


 

export default Schedule