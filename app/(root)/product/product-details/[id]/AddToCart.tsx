"use client"
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button"
import { addItem, CartItem } from "@/store/cartSlice";
import { Product } from "@/types";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const addCartHandler = () => {
    toast({
      description: "Item Added to the cart ",
      variant:'success'
    })
       dispatch(addItem(product))
  };

  return (
    <Button
      onClick={() => {
        addCartHandler();
      }}
      className="mt-6">
      Add to cart
    </Button>
  )
}

export default AddToCart
