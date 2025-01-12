import { AiFillPhone } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { ImLocation } from "react-icons/im";

import React from 'react'
import Banner from "../../components/banner/Banner";
import Cards from '../../components/cards/Cards';
import Footer from "../../components/footer/Footer";
import img from '../../images/banner.png'
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
    return (
        <div>
            <div className="px-[6vw]">
                <div><Banner img={img} /></div>
                <div className="flex max-sm:flex-col max-sm:grid max-sm:grid-cols-2">
                    <Cards icon={<ImLocation />} p={'320 тысяч вариантов квартиры, отели, гостевые дома'} />
                    <Cards icon={<IoIosPricetags />} p={'Цены напрямую от хозяев жилья'} />
                    <Cards icon={<IoMdShareAlt />} p={'Кэшбэк бонусами после каждой поездки'} />
                    <Cards icon={<AiFillPhone />} p={'Круглосуточная служба поддержки'} />
                </div>
            </div>
            <div><About /></div>
            <div><Contact /></div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Home
