import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signin = () => {

  // create hooks that will enable to store the different states of your application
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // create three additional hooks that will help you store the different states of your application
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Below hook will direct a user to a given page when the details entered are correct.
  const navigate = useNavigate();

  // create a function to handle submit event
  const submit = async (e) =>{
    // below we prevent page reload
    e.preventDefault()

    // we update the loading hook with a message
    setLoading("Please wait as we log you In...")

    // have a try and catch block
    try{
      // create a form data object
      const data = new FormData();

      // insert records to the new object created
      data.append("email", email);
      data.append("password", password)

      // Post your data through your API
      const response = await axios.post("https://kimanibenkamotho.pythonanywhere.com/api/signin", data)

      // set the loading state back to default
      setLoading("");

      // have an if statement that will check whether there is a record with the details passed
      if(response.data.user){
        // setSuccess(response.data.Message)
        localStorage.setItem("user", JSON.stringify(response.data.user))

        // redirect the user to another page if the details are correct
        navigate("/")
      }
      else{
        // setError("An error occured")
        setError(response.data.Message)
      }
    }
    catch(error){
      setError(error.message)
    }
  }


  return (
    <div className="row justify-content-center mt-4">
        
      
     
      <div className="col-md-6 card shadow p-4">
        <h2>Sign In</h2>
        <form onSubmit={submit}>

          {loading}
          {success}
          {error}

          <input 
          type="email"
          placeholder="Enter your email Address Here."
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /> <br />

          {/* {email} */}

          <input 
          type="password"
          placeholder="Enter the password of the user"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
          <br /> <br />

          {/* {password} */}

          <button type="submit" className="btn btn-success">Sign In</button>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default Signin;