import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route,
    ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/footer/Footer";
import FooterBottom from "./components/home/footer/FooterBottom";
import Header from "./components/home/header/Header";
import HeaderBottom from "./components/home/header/HeaderBottom";
import SpecialCase from "./components/specialCase/SpecialCase";
import About from "./pages/about/About";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Journal from "./pages/journal/Journal";
import Offer from "./pages/offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Shop from "./pages/shop/Shop";

const Layout = () => {
    return (
        <div>
            <Header />
            <HeaderBottom />
            <SpecialCase />
            <ScrollRestoration />
            <Outlet />
            <Footer />
            <FooterBottom />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                {/* Header Navlink  Start */}
                <Route index element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/journal" element={<Journal />}></Route>
                {/* Header Navlink End */}
                <Route path="/offer" element={<Offer />}></Route>
                <Route path="/product/:_id" element={<ProductDetails />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/paymentGateway" element={<Payment />}></Route>
            </Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
        </Route>
    )
)

const App = () => {
    return (
        <div className="font-bodyFont">
            <RouterProvider router={router} />
        </div>
    )
}

export default App;