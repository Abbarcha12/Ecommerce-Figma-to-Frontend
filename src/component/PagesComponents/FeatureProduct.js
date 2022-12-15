import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import "./FeatureProductsCard.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { setproducts } from "../../redux/action/ProductAction"
export const FeaturedProducts = () => {
  const products = useSelector((state) => state.allProducts.products)
  const { id } = products
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("error:", err)
    })
    dispatch(setproducts(response.data))
  }
  useEffect(() => {
    fetchProducts()
    console.log(products)
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            const { id } = product
            return <div className="col-lg-4">
              <div class="wrapper">
                <div class="product-img">
                  <img src="http://bit.ly/2tMBBTd" height="220" width="227" />
                </div>
                <div class="product-info">
                  <div class="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>. </p>
                  </div>
                  <div class="product-price-btn">
                    <p><span>78</span>$</p>
                    <button type="button">buy now</button>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )


}