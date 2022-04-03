import React from "react";
import "./Wishlist.css";
import { Header } from "../Header/Header.jsx";
import { WishlistCard } from "./WishlistCard.jsx";
import { useWishlist } from "../../Context/WishlistContext.jsx";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <div>
      <Header />
      <div className="wishlist-wrapper">
        <h3 className="margin-b-sm flex-center">My Wishlist</h3>
        <div className="flex-row flex-wrap gap-xl">
        {wishlist.length !== 0 ? (
          wishlist.map((product) => (
            <WishlistCard product={product} key={product.id} />
          ))
        ) : (
          <h2 className="flex-center margin-auto text-primary">Your wishlist is empty</h2>
        )}

        </div>

      </div>
    </div>
  );
};

export { Wishlist };
