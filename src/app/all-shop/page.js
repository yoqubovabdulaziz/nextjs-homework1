import React from 'react'

import "./shopAll.scss"

import { SHOP_ALL_PRODUCTS } from '@/static'
import Image from 'next/image'

const page = () => {
    return (
        <section id="shop-all">
            <div className="container shop__all">
                <h1 className="shop__all__title">Shop All Products</h1>
                <div className="shop__all__wrapper">
                    {
                        SHOP_ALL_PRODUCTS.map(el => (
                            <div key={el.id} className="shop__all__card">
                                <div className="shop__all__card__frame">
                                    <Image src={el.image} />
                                </div>
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default page