"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, handleCountIncrease }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFullNameInputChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmed = window.confirm(
      `Are you sure you want to book ${island.name}\n Name: ${fullName}\n Phone: ${phoneNumber}`
    );

    if (confirmed) {
      handleCountIncrease();
      setFullName("");
      setPhoneNumber("");
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type Full Name"
          onChange={handleFullNameInputChange}
        />
        <input
          placeholder="Type Phone Number"
          onChange={handlePhoneNumberChange}
        />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
