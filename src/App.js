import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import { initListings, addListing, removeListing } from "./redux/listingsReducer";

const SubmitListings = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addListing(name, age))
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit"> Submit </button>
    </form>
  )
}

function App() {
  const listings = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initListings())
  }, [dispatch])
  return (
    <div className="App">
      {listings.map((listing) => {
        return <div key={listing.name+listing.age}> {listing.name}, {listing.age} <span onClick={()=>dispatch(removeListing(listing.name))} > X </span> </div>
      })}
      <SubmitListings />
    </div>
  )
}
export default App;
