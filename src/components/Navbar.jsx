import {NavLink} from "react-router-dom"


const links = [
  {
    title: "Home",
    link: "/"
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      <div>
        <NavLink className={({isActive}) => isActive ? "active_class" : "non_active"} to="/">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "active_class" : "non_active"} to="/home">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "active_class" : "non_active"} to="/singleproduct">Single Product</NavLink>
      </div>
    </>
  )
};
