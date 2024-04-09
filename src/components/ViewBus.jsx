import React from 'react'
import NavBus from './NavBus'

const ViewBus = () => {
  return (
    <div>
        <NavBus/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NUMBER</th>
      <th scope="col">ROUTE</th>
      <th scope="col">DRIVER</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>KL68365783</td>
      <td>Kochi</td>
      <td>Jhon</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>KL23594601</td>
      <td>Aluva</td>
      <td>Sabhu</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>KL76428537</td>
      <td>Njarakal</td>
      <td>Raju</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>KL97454601</td>
      <td>Edapilly</td>
      <td>Navin</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>KL95735206</td>
      <td>Cherthala</td>
      <td>Sashi</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>KL7537460801</td>
      <td>Kuzhupilly</td>
      <td>Ratish</td>
    </tr>

  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBus