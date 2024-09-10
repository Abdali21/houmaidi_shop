"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/hooks/use-toast";
import { addItem } from "@/store/cartSlice"
import { RootState } from "@/store/store"
import { Product } from "@/types"
import { Heart, ShoppingBagIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

type ProductProps = {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {
    const num = Math.round(product.rating.rate);
    const ratingArry = new Array(num).fill(0);

    const { toast } = useToast();

    const dispatch = useDispatch()
    const addToCartHandler = (product: Product) => {
        toast({
            description: "Item Added to Cart",
            variant:"success"
        })
        dispatch(addItem(product))
    }

    return (
        <div className="p-4">
            <div className="w-[200px] h-[150px] ">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-[80%] h-[80%] object-contain"
                />
            </div>
            <p className="mt-5 text-xs capitalize text-gray-600">{product.category}</p>
            <Link href={`/product/product-details/${product.id}`}>
                <h1 className="text-lg cursor-pointer hover:text-blue-900
                                 transition-all hover:underline sm:w-full
                                 sm:truncate mt-2 text-black font-semibold">
                    {product.title}
                </h1>
            </Link>
            <div className="flex items-center">
                {ratingArry.map((star) => {
                    return <StarIcon
                        key={Math.random() * 1000}
                        size={16}
                        fill="yellow"
                        className="text-yellow-500" />
                })}
            </div>
            <div className="flex items-center mt-2 space-x-2">
                <p className="text-black text-base line-through font-semibold text-opacity-50">
                    {`$${(product.price + 10).toFixed(2)}`}
                </p>
                <p className="text-black text-lg font-bold text-opacity-80">
                    ${product.price}
                </p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
                <Button size={'icon'} onClick={() => {
                    (addToCartHandler(product))
                }}>
                    <ShoppingBagIcon size={18} />
                </Button>
                <Button size={'icon'} className="bg-red-500">
                    <Heart size={18} />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
