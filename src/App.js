import React, { useState, useEffect } from 'react';
import View from './components/View';

const getDatafromLs = () => {
  const data = localStorage.getItem('cars')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

export const App = () => {
  const [cars, setcars] = useState(getDatafromLs)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const handleAddCarSubmit = (e) => {
    e.preventDefault()
    let car = {
      make,
      model,
      year
    }
    setcars([...cars, car])
    setMake('');
    setModel('')
    setYear('')
  }

  const deleteCar = (year) => {
    const filteredCars = cars.filter((element, index) => {
      return element.year !== year
    })
    setcars(filteredCars)
  }

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars))
  }, [cars])


  return (
    <div className="wrapper">
      <h1>AutoMoto</h1>
      <p>Add and View your Cars 🚘</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group" onSubmit={handleAddCarSubmit}>
            <label>Make</label>
            <input type="text" className="form-control" required onChange={(e) => setMake(e.target.value)} value={make}></input>
            <br />
            <label>Model</label>
            <input type="text" className="form-control" required onChange={(e) => setModel(e.target.value)} value={model}></input>
            <br />
            <label>Year</label>
            <input type="text" className="form-control" required onChange={(e) => setYear(e.target.value)} value={year}></input>
            <br />
            <button type="submit" className="btn btn-success btn-md">ADD</button>
          </form>
        </div>
        <div className="view-container">
          {cars.length > 0 && <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View cars={cars} deleteCar={deleteCar} />
                </tbody>
              </table>
            </div>
            <button className="btn btn-danger btn-md" onClick={() => setcars([])}>Remove All</button>
          </>}
          {cars.length < 1 && <div>No Cars Found</div>}
        </div>
      </div>
    </div >
  )
}

export default App
