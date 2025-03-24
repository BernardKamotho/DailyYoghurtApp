import axios from 'axios';
import  { useState } from 'react';
import Footer from './Footer';


const Addproducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

     // Hooks for information messages
     const [loading, setLoading] = useState("");
     const [message, setMessage] = useState("");
     const [error, setError] = useState("");
   
     //Submit Function
     const submit = async (e) => {
       //Prevent default actions
       e.preventDefault();
       //update loading hook to show progress
       setLoading("Pleaser wait ... ");
   
       //add all updated hooks to data variable
       const data = new FormData();
       data.append("product_name", product_name);
       data.append("product_description", product_description);
       data.append("product_cost", product_cost);
       data.append("product_photo", product_photo);
   
       //Post data to Backend API
       try {
         const response = await axios.post(
           "https://kimanibenkamotho.pythonanywhere.com/api/addproduct",
           data
         );
         //Set loding message to empty, after a successful POST to API
         setLoading("")
         //Update message hook to successfully Added to notify the user.
        //  setMessage("Product Added successfully!");
        setMessage(response.data.Message)
       //   setMessage(response.data.success);
   
         // reset the input fields 
         setProductName("");
         setProductDescription("");
         setProductCost("");
         setProductPhoto("");
   
         //Catch Any server error, i.e internet issues , server errors
       } catch (error) {
         setError("Failed to add product. Please try again.");
       }
     };


  return (
    <div className="row justify-content-center mt-2 y">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          {loading}
          {message}
          {error}
          <h2 className='text-info'>Add A Yoghurt</h2>
          <input type="text" className="form-control" placeholder="Enter the Yoghurt Name" 
          value={product_name} onChange={(e) => setProductName(e.target.value)} />
          <br />
          {/* {product_name} */}
          <textarea placeholder="Enter some Description of the Yoghurt..." className="form-control" value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}></textarea> <br />
          {/* {product_description} */}
          <input type="number" placeholder="Enter the price of the yoghurt" className="form-control"
          onChange={(e) => setProductCost(e.target.value)} value={product_cost} />
          <br />
          {/* {product_cost} */}

          <input type="file" className="form-control"
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}
          />
          <br />

          
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Addproducts