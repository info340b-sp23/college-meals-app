// add recipe array here 

// this is very barebone, add details!!
const recipedata = [
    {
      id: 1,
      title: "Veggie Quesadilla",
      cost: "$",
      time: "15",
      diet: "vegetarian",
      allergies: [],
      nutrition: "low-fat",
      img: "img/veggie-quesadilla.jpeg",
      imgAlt: "vegetable quesadilla", 
      author: "Jillian H.",
      description: "Calling all college foodies! I just whipped up a game-changing Veggie Quesadilla that will satisfy your taste buds and budget. Imagine warm tortillas enveloping a melty blend of shredded Mexican cheese, sautéed bell peppers, onions, and beans for that perfect crunch and burst of flavor. It's an easy, nutritious, and delicious option whether you need a quick study break or a cozy dinner with friends."
    },
    {
      id: 2,
      title: "Chicken Stir-Fry",
      cost: "$",
      time: "30",
      diet: "",
      allergies: [],
      nutrition: "low-fat",
      img: "img/chicken-stir-fry.jpeg",
      imgAlt: "chicken stir-fry", 
      author: "Alex M.",
      description: "Hey, guys! If you're looking for a quick and healthy meal, my Chicken Stir-Fry is the answer. Tender chicken, colorful veggies, and a flavorful sauce come together in just 30 minutes. It's a budget-friendly option too. Perfect for busy college days when you need a delicious and nutritious meal without breaking the bank!"
    },
    {
      id: 3,
      title: "Vegan Curry",
      cost: "$",
      time: "60",
      diet: "vegan",
      allergies: ["nuts"],
      nutrition: "low-carb", 
      img: "img/vegan-curry.webp",
      imgAlt: "vegan curry", 
      author: "Sophie L.",
      description: "Calling all vegan food lovers! You have to try my mouthwatering Vegan Curry. It's a burst of flavors and spices that will satisfy your taste buds. Packed with fresh vegetables and aromatic spices, this curry is a perfect combination of healthy and delicious. Plus, it's low-carb and free from nuts, making it suitable for various dietary preferences."
    },
    {
      id: 4,
      title: "Grilled Salmon",
      cost: "$$",
      time: "20",
      diet: "pescatarian",
      allergies: [],
      nutrition: "high-protein",
      img: "img/grilled-salmon.jpeg",
      imgAlt: "grilled salmon", 
      author: "David R.",
      description: "Hey, seafood fans! My Grilled Salmon recipe is a winner. With tender and flaky salmon fillets seasoned to perfection, this dish is a delight for pescatarian foodies. It's ready in just 20 minutes, making it a great option for a quick and healthy dinner. Get your omega-3 fix with this high-protein masterpiece!"
    
    },
    {
      id: 5,
      title: "Mushroom Risotto",
      cost: "$",
      time: "45",
      diet: "vegetarian",
      allergies: [],
      nutrition: "low-fat",
      img: "img/mushroom-risotto.jpeg",
      imgAlt: "mushroom risotto", 
      author: "Bella G.",
      description: "Hello, fellow foodies! Prepare to be amazed by my Mushroom Risotto. This creamy and comforting dish is a vegetarian delight. Imagine Arborio rice cooked to perfection with earthy mushrooms and aromatic herbs. It's a culinary journey that satisfies your taste buds and warms your soul. And the best part? It's low in fat, so you can indulge guilt-free!"
    },
    {
      id: 6,
      title: "Gluten-Free Pizza",
      cost: "$$$",
      time: "30",
      diet: "gluten-free",
      allergies: ["gluten"],
      nutrition: "",
      img: "img/gluten-free-pizza.jpeg", 
      imgAlt: "pizza", 
      author: "Michelle B.",
      description: "Pizza lovers, rejoice! I present to you my Gluten-Free Pizza recipe. It's a game-changer for those with gluten sensitivities. Picture a crispy, thin crust topped with your favorite toppings and melty cheese. This gluten-free version brings all the flavors and satisfaction without any gluten-related worries. Trust me, you won't miss the traditional crust!"
 
    },
    {
      id: 7,
      title: "Spaghetti Bolognese",
      cost: "$$",
      time: "45",
      diet: "gluten-free",
      allergies: ["gluten"],
      nutrition: "high-protein",
      img: "img/spaghetti-bolognese.png",
      imgAlt: "spaghetti bolognese", 
      author: "Emily H.",
      description: "Hey guys! You have to try this Spaghetti Bolognese recipe! It's a veggie version that's so flavorful, you won't miss the meat. Picture perfectly cooked spaghetti smothered in a rich tomato sauce, packed with plant-based protein. It's my go-to dish for study nights, and it's even gluten-free for those with dietary needs. Trust me, it's a taste sensation you won't forget!"
    }
  ];
export default recipedata;  