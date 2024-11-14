import CirclesScroll from './parts/circles_scroll'
import Circles from './parts/circles'
import Chips from './parts/chips'
import Title from './parts/title'
import Modal from './parts/modal'
import Footer from './parts/footer_actions'
import Swiper from './parts/swiper'
import Button from './parts/button'
import Banner from './parts/banner'
import ButtonItem from './parts/button_item'
import ShadowItem from './parts/shadow_item'
import DetailedCard from './parts/detailed_card'
import ComponentStack from './parts/component_stack'
import CardBluredFooter from './parts/card_blured_footer'
import GridStack from './parts/grid_stack'
import TopHeader from './parts/top_header'

export default function Home() {
    
    return (
        <>
            <TopHeader />
            <CirclesScroll items={[
                {'text': 'استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱ استوری شماره ۱ استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱ استوری شماره ۱ استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱ استوری شماره ۱ استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱ استوری شماره ۱ استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
                {'text': 'استوری شماره ۱ استوری شماره ۱ استوری شماره ۱', 'src': "https://images.interactify.live/9cf53a10ab5d48b9a863c7c136dfc52b.jpeg"},
            ]} />
            <Chips items={[
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
                {'text': 'Chip'},
            ]} />
            <Swiper pagination>
                <Banner src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cec727a9d6b7781ca9ee4fd1c126f25524f93af8_1726055356.jpg?x-oss-process=image/quality,q_95/format,webp" />
                <Banner src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cec727a9d6b7781ca9ee4fd1c126f25524f93af8_1726055356.jpg?x-oss-process=image/quality,q_95/format,webp" />
                <Banner src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cec727a9d6b7781ca9ee4fd1c126f25524f93af8_1726055356.jpg?x-oss-process=image/quality,q_95/format,webp" />
            </Swiper>
            <Title>علاقه مندی های شما</Title>
            <Swiper>
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
            </Swiper>
            <Title>علاقه مندی های شما</Title>
            <Swiper>
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
            </Swiper>
            <Title>علاقه مندی های شما</Title>
            <Swiper>
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
            </Swiper>
            {/* <CardBluredFooter actionText="! خبرم کن" width={220} text="بزودی میاد ..." />
            <CardBluredFooter actionText="! خبرم کن" width={220} text="بزودی میاد ..." /> */}
            {/* <Title>دسته بندی ها</Title>
            <Title>فروشگاه ها</Title>
            <CirclesScroll items={[
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
            ]} />
            <Swiper>
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
            </Swiper>
            <Banner footer={{'buttonText': 'button', 'text': 'خرید محصولات تخفیف دار', 'icon': 'offer', 'iconColor': 'secondary', 'buttonColor': 'secondary'}} /> */}
            {/* <Circles skew items={[
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
                {'src': 'https://ups.nomreyar.com/uploads/users_content/bmw.jpeg'},
            ]} /> */}
            {/* <Swiper>
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
                <ButtonItem />
            </Swiper>
            <Swiper>
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
                <ShadowItem url="https://ups.nomreyar.com/uploads/users_content/book.jpg" text="کتاب کمک درسی کلاغ سپید" />
            </Swiper>
            <Banner /> */}
            {/* <Modal /> */}
            <ComponentStack component={<DetailedCard />} items={[
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
                {"title": "کتاب اموزشی کلاغ  سپید پایه دوازدهم دوره دوم", 'circle': true, 'img': "https://ups.nomreyar.com/uploads/users_content/book.jpg", "bottomColor": "green", "bottom": 1000000},
            ]} />
        </>
    );
}
