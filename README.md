ARRAY DESTRUCTURING:

const arr=useState(resLsit);
const[listOfRestaurants,setListOfRestaurant]=arr;

const lisOfRestaurants=arr[0];
const setListOfRestaurants=arr[1];

OPTIONAL CHAINING-A good way of hadling the data
setListOfRestaurant(json?.data?.cards);

//Conditional Rendering=Rendering based on the condition
  if(){
    return ;
  }

if no dependency array-useEffect called on every render
useEffect(()=>
console.log("useEffect called"));

if there is an empty dependency array-useEffect called on only initial render(just once)
useEffect(()=>
console.log("useEffect called"),[]);

if we put something inside the dependency then it is only be called when the dependency changes.
example : btnNameReact is called everytime when btnNameReact is updated

Note: Hooks can only be called inside body or functional component.
Try to call hooks on top [it means when function starts]
Never use hooks inside the if ,else ,for loop , functions[it works but creates inconsistency]
useState used to create local state variables inside the functional components
The state variables are meant to create it inside the functional component on the higher level.
