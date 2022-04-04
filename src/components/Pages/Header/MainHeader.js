import React,{useState} from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import Search from "./Search";
import "./Header.css";

const MainHeader = () => {
  const [closeSearch, setCloseSearch] = useState(false);

  const SearchToggle = () => {
      setCloseSearch(!closeSearch);
  }
  console.log(closeSearch);


  return (
    <>
      <div className="mainHeader">
        <TopNav />
        <BottomNav SearchToggle={SearchToggle} closeSearch={closeSearch}/>
        <Search SearchToggle={SearchToggle}  closeSearch={closeSearch}/>
      </div>
    </>
  );
};

export default MainHeader;
