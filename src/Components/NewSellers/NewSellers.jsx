import { useState } from "react";
import "./NewSellers.css";

function NewSellers() {
  const [newSeller, setNewSeller] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setNewSeller({
      ...newSeller,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="new-sellers">
      <h3>Get access to the best deals</h3>
      <p>Sign up to recieve emails from us</p>
      <div className="new-sellers-form">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={newSeller.email}
          onChange={handleChange}
        />
        <button>Subscribe</button>
      </div>
      <p>100% free, Unsubscribe any time!</p>
    </div>
  );
}

export default NewSellers;
