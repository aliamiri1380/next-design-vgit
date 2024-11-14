"use client"

import { Input } from "@nextui-org/input";
import Accordion from "../parts/accordion";
import { Spacer } from "@nextui-org/react";
import Button from '../parts/button'
import SearchInput from "../parts/search_input";
import LoadMoreBtn from "../parts/load_more_btn";
import Title from "../parts/title";
import { IconShoppingBag } from "@tabler/icons-react";
import ComponentStack from "../parts/component_stack";
import ShoppingBagHeader from "../parts/shopping_bag_header";
import CardPrimaryAction from "../parts/card_primary_action";
import GridStack from "../parts/grid_stack";
import Price from "../parts/price";
import BetweenP from "../parts/between_p";

export default function Home() {
    return (
        <>
            <Spacer y={4} />
            <ShoppingBagHeader />
            <ComponentStack component={<BetweenP />} items={[
                {'left': '200,000', 'right': "جمع سفارش", "toman": true},
                {'left': '200,000', 'right': "مالیات", "toman": true},
                {'left': '200,000', 'right': "هزینه ارسال", "toman": true},
                {'left': '200,000', 'right': "تخفیف", "toman": true},
            ]} />
            <Price value="300000" />
            <Button variant="shadow" className="m-auto block text-white" color="success">پرداخت</Button>
            <Title horizontal className="my-8">لیست سبد خرید شما</Title>
            <GridStack width="150px" component={<CardPrimaryAction className="m-auto" />} items={[
                {'title': "جمع سفارش", "price": 5000, "src": "https://ups.nomreyar.com/uploads/users_content/book.jpg"},
                {'title': "مالیات", "price": 5000, "src": "https://ups.nomreyar.com/uploads/users_content/book.jpg"},
                {'title': "هزینه ارسال", "price": 5000, "src": "https://ups.nomreyar.com/uploads/users_content/book.jpg"},
                {'title': "تخفیف", "price": 5000, "src": "https://ups.nomreyar.com/uploads/users_content/book.jpg"},
            ]} />
        </>
    );
}
