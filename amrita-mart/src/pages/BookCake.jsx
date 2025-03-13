import React, { useState, useRef, useEffect } from "react";

const BookCake = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [regNo, setRegNo] = useState("");
  const [flavor, setFlavor] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [message, setMessage] = useState("");
  const [proof, setProof] = useState(null);
  const [regNoSuggestions, setRegNoSuggestions] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedRegNos = JSON.parse(localStorage.getItem("regNos")) || [];
    if (regNo) {
      const filtered = savedRegNos.filter(r => r.includes(regNo));
      setRegNoSuggestions(filtered);
    } else {
      setRegNoSuggestions([]);
    }
  }, [regNo]);

  useEffect(() => {
    if (weight) {
      setPrice(800 * parseFloat(weight));
    } else {
      setPrice(0);
    }
  }, [weight]);

  const validateForm = () => {
    if (!name || !department || !regNo || !flavor || !weight || !deliveryTime || !message || !proof) {
      alert("All fields are required.");
      return false;
    }
    if (isNaN(weight) || weight <= 0) {
      alert("Please enter a valid cake weight.");
      return false;
    }
    if (new Date(deliveryTime) <= new Date()) {
      alert("Delivery time must be in the future.");
      return false;
    }
    return true;
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const savedRegNos = JSON.parse(localStorage.getItem("regNos")) || [];
      if (!savedRegNos.includes(regNo)) {
        savedRegNos.push(regNo);
        localStorage.setItem("regNos", JSON.stringify(savedRegNos));
      }
      setName("");
      setDepartment("");
      setRegNo("");
      setFlavor("");
      setWeight("");
      setPrice(0);
      setDeliveryTime("");
      setMessage("");
      setProof(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      alert("Order submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
      <h1 className="text-4xl font-extrabold text-red-600 mb-2">Book a Cake</h1>
      <p className="text-lg text-gray-700 mb-6">Choose your favorite cake and place an order!</p>
      
      <form className="mt-6 flex flex-col gap-4 w-full max-w-lg bg-white p-8 shadow-lg rounded-lg border border-gray-200" onSubmit={handleSubmit}>
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" type="text" placeholder="Reg. No" value={regNo} onChange={(e) => setRegNo(e.target.value)} required />
        {regNoSuggestions.length > 0 && (
          <ul className="border border-gray-300 rounded-md p-2 bg-white shadow-md">
            {regNoSuggestions.map((suggestion, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-200 p-1" onClick={() => setRegNo(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" value={flavor} onChange={(e) => setFlavor(e.target.value)} required>
          <option value="">Select flavor</option>
          <option value="Chocolate Truffle">Chocolate Truffle</option>
          <option value="Red Velvet">Red Velvet</option>
          <option value="Fruit Cake">Fruit Cake</option>
        </select>
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" type="number" min="0.5" step="0.1" placeholder="Cake Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        <p className="text-lg font-semibold">Price: Rs. {price}</p>
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" type="datetime-local" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} required />
        <textarea className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Message on the cake" value={message} onChange={(e) => setMessage(e.target.value)} required />
        
        <label className="text-gray-700 font-medium">Upload Permission Letter</label>
        <div className="flex items-center gap-2">
          <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600" onClick={handleFileSelect}>Choose File</button>
          <span>{proof ? proof.name : "No file chosen"}</span>
        </div>
        <input ref={fileInputRef} className="hidden" type="file" accept="image/jpeg, image/png, application/pdf" onChange={(e) => setProof(e.target.files[0])} required />
        
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Submit Order</button>
      </form>
    </div>
  );
};

export default BookCake;
