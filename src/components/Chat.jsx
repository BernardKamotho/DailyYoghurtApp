import React, { useState } from 'react';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your Helper. Type 'quit' to end the conversation." },
  ]);
  const [input, setInput] = useState('');

 const pairs = [
  // Greetings & Basic Chat
  [/(hi|hello|hey)/i, ["Hello! Welcome to Yummy Yoghurts!", "Hey there, yoghurt lover!", "Hi! Craving something smooth and creamy?"]],
  [/how are you\?/i, ["I'm feeling fresh, like a chilled yoghurt!", "Doing great—ready to serve up some flavor."]],
  [/what'?s up/i, ["All good here in the land of yoghurts!", "Just chilling with some vanilla cups."]],
  
  // Product Details
  [/yoghurt|yogurt/i, ["We offer a delicious variety of yoghurts—plain, flavored, Greek, dairy-free, and more."]],
  [/flavor|flavour/i, ["Our current flavors include strawberry, vanilla, mango, chocolate, blueberry, peach, and raspberry."]],
  [/strawberry/i, ["Strawberry yoghurt is made with real fruit puree—tangy, sweet, and delicious."]],
  [/mango/i, ["Our mango yoghurt tastes like summer—tropical, smooth, and creamy."]],
  [/vanilla/i, ["Vanilla is our bestseller—sweet, subtle, and soothing."]],
  [/chocolate/i, ["Chocolate yoghurt? Absolutely. Creamy with a rich cocoa flavor."]],
  [/blueberry/i, ["Blueberry yoghurt is a fruity, antioxidant-rich treat."]],
  [/peach/i, ["Peach yoghurt is refreshingly sweet with chunks of real fruit."]],
  [/raspberry/i, ["Raspberry yoghurt is tangy and flavorful—great with granola!"]],
  [/seasonal/i, ["We have seasonal flavors like pumpkin spice, lychee, and apple cinnamon."]],
  
  // Types of Yoghurts
  [/greek/i, ["Our Greek yoghurt is thick, creamy, and high in protein."]],
  [/plain/i, ["Plain yoghurt is perfect for smoothies, marinades, or a healthy snack."]],
  [/dairy[-\s]?free/i, ["We have dairy-free yoghurts made from almond, coconut, and oat milk."]],
  [/vegan/i, ["Our vegan options are 100% plant-based and delicious!"]],
  [/protein/i, ["Try our protein-packed Greek yoghurts for an energy boost."]],
  [/sugar[-\s]?free/i, ["Yes! We have sugar-free yoghurts sweetened with stevia or monk fruit."]],
  [/low[-\s]?fat/i, ["Low-fat options? Absolutely. Same flavor, fewer calories."]],
  [/kids/i, ["We offer fun yoghurt packs for kids with fun characters and flavors."]],
  
  // Ingredients & Nutrition
  [/ingredients/i, ["We use all-natural ingredients with no artificial colors or preservatives."]],
  [/nutrients|nutrition/i, ["Our yoghurts are rich in calcium, protein, and probiotics."]],
  [/calories/i, ["Most cups range from 90 to 180 calories depending on flavor."]],
  [/probiotic/i, ["Yes! All our yoghurts contain live cultures for gut health."]],
  [/gluten/i, ["All our yoghurts are gluten-free!"]],
  [/nut/i, ["We label all nut-containing products. Let us know if you have allergies."]],
  [/allergy/i, ["We take allergens seriously. Please ask about any ingredient."]],
  
  // Pricing & Packaging
  [/price|cost/i, ["Each cup is $1.99. You can also buy multi-packs and family packs at a discount."]],
  [/bulk|wholesale/i, ["We offer bulk pricing for cafés, gyms, and offices. Contact us to learn more."]],
  [/family pack/i, ["Our family pack includes 6 cups for just $10.99."]],
  [/value/i, ["We believe in delicious and affordable yoghurt. Great taste, honest price."]],
  [/offer|deal|promo/i, ["Check our current deals—like 10% off all Greek yoghurts this week!"]],
  [/subscribe/i, ["Subscribe to our newsletter for weekly deals and flavor alerts!"]],
  
  // Shopping & Delivery
  [/order/i, ["You can order directly through our site. Just type 'menu' to see options."]],
  [/delivery/i, ["We offer fast delivery. Free on orders over $20."]],
  [/pickup/i, ["Want to swing by? We offer 10% off for pickup orders."]],
  [/location/i, ["We're located in Springfield but we ship nationwide!"]],
  [/ship/i, ["Yes, we ship across the country in eco-friendly refrigerated packs."]],
  [/menu/i, ["Here’s our menu: strawberry, mango, vanilla, chocolate, blueberry, peach, Greek, plain, vegan, and more."]],
  
  // Storage & Expiry
  [/store|storage/i, ["Keep your yoghurt refrigerated at 4°C. Don’t freeze unless it’s frozen yoghurt!"]],
  [/expire|shelf/i, ["Yoghurt typically lasts 7–10 days. Check the expiry on each cup."]],
  [/fresh/i, ["Freshness is key. We make small batches every day."]],
  
  // Taste & Pairings
  [/taste/i, ["Our yoghurts are smooth, creamy, and rich in flavor. Want to try a sample?"]],
  [/sweet/i, ["Our fruit yoghurts are lightly sweetened with real fruit and organic sugar."]],
  [/bitter/i, ["Our plain Greek yoghurt can be a bit tangy—try it with honey or fruit."]],
  [/with (granola|honey|fruit)/i, ["Great choice! Yoghurt pairs wonderfully with $1."]],
  [/recommend/i, ["I recommend starting with a fruit multi-pack—it’s our best seller!"]],
  [/favorite|favourite/i, ["Strawberry and mango are the top favorites."]],
  
  // Customer Service
  [/contact/i, ["You can contact us at support@yummyyoghurts.com or call 123-456-7890."]],
  [/help/i, ["I’m here to help with products, orders, or anything else!"]],
  [/issue|problem/i, ["Oh no! Let us know what happened, and we’ll make it right."]],
  [/refund/i, ["We offer refunds or replacements on any unsatisfactory product."]],
  
  // Casual & Fun
  [/fun/i, ["Yoghurt is always fun! Especially when it's mango swirl."]],
  [/joke/i, ["Why did the yoghurt go to art school? Because it had great culture!"]],
  [/bored/i, ["Maybe a cup of peach yoghurt can brighten your day!"]],
  [/hungry/i, ["You’re in the right place. Want to see today’s menu?"]],
  
  // Identity
  [/name/i, ["I'm YogBot, your friendly yoghurt assistant!"]],
  [/who (are|r) you/i, ["I'm YogBot, here to serve up delicious info and smooth service!"]],
  [/made you|develop/i, ["I was developed by Bernard Kim."]],

  // Conversation closers
  [/bye|goodbye/i, ["See you later! Stay smooth!", "Goodbye! Come back for more creamy delight."]],
  [/thank/i, ["You're welcome!", "Anytime!", "Glad I could help."]],
  
  // Fallback
  [/(.*)/, ["Hmm, I didn't quite get that. Want to ask about flavors, orders, or delivery?"]],
];



  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    let botMessage;

    if (input.toLowerCase() === 'quit') {
      botMessage = { sender: 'bot', text: "Goodbye! Have a nice day." };
    } else {
      const response = getBotResponse(input);
      botMessage = { sender: 'bot', text: response };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="minee">
        <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Helper ChatBot</h5>
          <div className="border p-2 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
     
    </div>
    <Footer/>
    </div>
    
  );
};

export default ChatBot;
