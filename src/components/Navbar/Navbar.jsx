import CartWidget from "../CartWidget";

export const Navbar = () => {
    return (
        <div Style={{ width:"100%", height: 200}}>
            <CartWidget />
            <h1>Proyecto SGK</h1>
        </div>
    );
}

export default Navbar;