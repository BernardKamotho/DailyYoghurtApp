import { useState, useEffect } from "react"; // for state management
import axios from "axios"; //For API Access
import { Link, useNavigate } from "react-router-dom"; // For link to other component
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {

    // Initialize Hooks
    const [products, setProducts] = useState([]);  // Default to empty array instead of a string
    const [loading, setLoading] = useState(""); //For loading message
    const [error, setError] = useState(""); //error message hook

    const navigate = useNavigate();
    
    //Specify image location URL
    const img_url = "https://kimanibenkamotho.pythonanywhere.com/static/images/"
    
    const getproducts = async()=>{
        setLoading("Please wait, We are retrieving the products .."); // Set loading message when fetching starts
        try {
        const response = await axios.get("https://kimanibenkamotho.pythonanywhere.com/api/getproducts")
        setProducts(response.data)
        console.log(response.data)
        setLoading("")
        }
        catch(error){
            setLoading("")
            setError("There was an Error")    
        }
    }//end function

    // Call getproducts on Use Effect
    useEffect(() => {
       getproducts()
    }, []); // empty dependency array ensures this runs only once when the component mounts

    return (
        
    <div className="row">
        <ImageCarousel/>

         <h3 className="mt-1 text-danger ">Available Yoghurts</h3>

        {/* Bind Error Messages */}
          {loading}
          {error}

        {/* Map over products and display them */}
        {products.map((product) => (
            <div className="col-md-3 justify-content-center mb-3">
                {/* Card with equal size */}
                <div className="card shadow card-margin">
                        <img 
                            className="product_img mt-4"
                            src={img_url + product.product_photo} 
                            alt="missing"
                        />
                        {/* {product.product_photo} */}
                  
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description.slice(0, 65)}</p>
                        <b className="text-warning">{product.product_cost} KES</b>  <br />
                        <button className="btn btn-success" onClick={()=> navigate("/makepayment", {state : {product}})}>Buy Now</button>
                    </div>
                </div>
            </div>
        ))}

        <Footer/>
        
    </div>
    );

}

export default Getproducts;