import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ShareWishlist from "./components/Content/ShareWishlist";
import TabWishlist from "./components/Content/Tabs/TabWishlist";

const MyComponent = () => (
  <main>
    <h1>Hey there!</h1>
  </main>
)

console.log(MyComponent)

function App() {
  return (
    <>
      <Header />
      <div className='index-headingDiv'>
        <span className='index-heading'> My Whishlist </span>
      </div>
      <ShareWishlist />
      <TabWishlist />
    </>
  );
}

export default App;
