import React from 'react';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import about from '../../images/about.png'
import aboutBanner from '../../images/aboutBanner.png'
import { useLocation, useParams } from 'react-router-dom';

const About = () => {
    const page = useLocation()

    return (
        <div>
            <div className={`${page.pathname == '/about' ? "" : "hidden"} px-[6vw]`}>
                <Banner img={aboutBanner} />
            </div>
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Biz haqimizda</h2>
                    <p className="text-center text-gray-600 text-lg mb-8">
                        Bizning vazifamiz sizning uyingizni qulay va oson topishga yordam berishdir. Biz ijara uylar
                        va mulklar boyicha eng yaxshi yechimlarni taqdim etamiz.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        <div className="flex justify-center">
                            <img
                                src={about}
                                alt="Biz haqimizda"
                                className="rounded-lg shadow-lg max-w-full md:w-3/4"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Nega bizni tanlaysiz?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Bizning xizmatlarimiz sizga oz uyingizni topish yoki ijara berish jarayonida qulaylik
                                yaratishga qaratilgan. Bizning platformamiz orqali siz qulay narxlar, yuqori sifat va
                                ishonchli xizmatlardan foydalanishingiz mumkin.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Bizning jamoamiz malakali mutaxassislardan tashkil topgan bolib, har bir mijozning
                                talablariga mos yechim topishga harakat qiladi. Sizning mamnunligingiz bizning
                                maqsadimiz.
                            </p>
                            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200">
                                Koproq bilib oling
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${page.pathname == '/about' ? "" : "hidden"}`}>
                <Footer />
            </div>
        </div>
    );
};

export default About;
