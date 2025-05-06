import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();
  const img_url = "https://kimanibenkamotho.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading("Please wait, we are retrieving the products...");
    try {
      const response = await axios.get("https://kimanibenkamotho.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("There was an error retrieving products.");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // Filter based on search
  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filtered_products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered_products.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (pageNum) => setCurrentPage(pageNum);

  return (
      <div className="container mt-4 ">
      <ImageCarousel />

      <h3 className="mt-4 text-danger">Available Yoghurts</h3>

      <div className="row justify-content-center mt-3 mb-3 \">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
        />
      </div>

      {loading && <p className="text-info">{loading}</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {paginatedProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow h-100">
              <img
                className="card-img-top product_img mt-4"
                src={img_url + product.product_photo}
                alt={product.product_name}
              />
              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 65)}</p>
                <b className="text-warning">{product.product_cost} KES</b><br />
                <button
                  className="btn btn-success mt-2"
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center my-4">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <li
                  key={pageNum}
                  className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => changePage(pageNum)}>
                    {pageNum}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

     

      <Footer />
    </div>
  );
};

export default Getproducts;
