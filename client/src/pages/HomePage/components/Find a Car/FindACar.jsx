import React, { useState, useReducer } from "react";
import useGetCarsByParams from "../../../../hooks/carHooks/useGetCarsByParams";
import "./FindACar.scss";

const FindACar = () => {
  const [params, setParams] = useState({});
  const [formValues, setFormValues] = useState({});
  const [availableModels, setAvailableModels] = useState([]);

  // Use the custom hook with the current params
  const { data: cars, isLoading, isError } = useGetCarsByParams(params);

  // Car makes and models mapping
  const carMakesModels = {
    Audi: ["A3", "A4", "A5", "A6"],
    BMW: ["3 Series", "4 Series", "5 Series"],
    Honda: ["Civic", "Accord", "CR-V"],
    Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe"],
    Mazda: ["Mazda3", "Mazda6", "CX-5", "CX-3", "Atenza"],
    Mitsubishi: ["Outlander", "ASX", "Lancer", "Pajero"],
    Nissan: ["Altima", "Maxima", "Rogue", "Murano"],
    Suzuki: ["Swift", "Vitara", "Jimny", "S-Cross"],
    Toyota: ["Corolla", "Camry", "RAV4", "Highlander"],
  };

  const handleFilterChange = (e) => {
    if (e.target.name === "make" && e.target.value) {
      setAvailableModels(carMakesModels[e.target.value]);
    } else if (e.target.name === "make" && !e.target.value) {
      setAvailableModels([]);
    }
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams(formValues);
  };

  const handleReset = () => {
    setFormValues({});
    setParams({});
    setAvailableModels([]);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred while fetching cars</div>;

  return (
    <div className="FindACar">
      {/* Form and filters */}
      <div className="FindACar__Filters">
        <form className="FindACar__Filters__Form" onSubmit={handleSubmit}>
          {/* Make dropdown */}
          {/* <label className="FindACar__Filters__Form__Label" htmlFor="make">
            Make:
          </label> */}
          <select
            className="FindACar__Filters__Form__Select"
            name="make"
            onChange={handleFilterChange}
          >
            <option value="">Select a make</option>
            {Object.keys(carMakesModels).map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>

          {/* Model dropdown */}
          {/* <label htmlFor="model">Model: </label> */}
          <select
            name="model"
            onChange={handleFilterChange}
            className="FindACar__Filters__Form__Select"
          >
            <option value="">Select a model</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          {/* <label htmlFor="year">Year: </label> */}
          <select
            name="year"
            onChange={handleFilterChange}
            className="FindACar__Filters__Form__Select"
          >
            <option value="">Select a year</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2018">2017</option>
            <option value="2018">2016</option>
            <option value="2018">2015</option>
            <option value="2018">2014</option>
            <option value="2018">2013</option>
            <option value="2018">2012</option>
            <option value="2018">2011</option>
            <option value="2018">2010</option>
            <option value="2018">2009</option>
            <option value="2018">2008</option>
            <option value="2018">2007</option>
            <option value="2018">2006</option>
            <option value="2018">2005</option>
            <option value="2018">2004</option>
            <option value="2018">2003</option>
            <option value="2018">2002</option>
            <option value="2018">2001</option>
            <option value="2018">2000</option>
            {/* Add more options here */}
          </select>

          {/* Add more dropdown menus for other filters as needed */}

          <button className="Search__Button" type="submit">
            Search
          </button>
          <button className="Clear__Button" type="button" onClick={handleReset}>
            Clear Search
          </button>
        </form>
      </div>
      <div className="FindACar__Car">
        {/* <div className="FindACar__Car__Sort">Sort</div> */}
        <div className="FindACar__Car__Container">
          {cars.map((car) => (
            <div key={car._id} className="FindACar__Car__Item">
              <img className="FindACar__Car__Image" src={car.images[0]} />
              <div className="FindACar__Car__Details">
                <div className="FindACar__Car__Name">
                  {car.year} {car.make} {car.model}
                </div>
                <div className="FindACar__Car__Price">
                  Price: ${car.price} {car.currency}
                </div>
                <div className="FindACar__Car__Location">
                  Location: {car.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindACar;
