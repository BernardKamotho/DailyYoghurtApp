const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Yoghurts are creamy, nutrient-rich dairy products made by fermenting milk with beneficial bacteria.</p>
                <p> They offer probiotics for gut health, protein for muscle growth, and calcium for strong bones, making them a delicious, healthy snack.</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.jpg" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark"> Nutritious dairy products made by fermenting milk with beneficial bacteria. They come in various flavors, textures, and consistencies, from thick Greek yogurt to drinkable varieties. Rich in probiotics, proteins, and calcium, yoghurts promote gut health, boost immunity, and aid digestion. They can be enjoyed plain, sweetened, or mixed with fruits, nuts, and honey.</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Bernard Kamotho &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;