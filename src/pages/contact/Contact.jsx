import React from 'react';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import contactBanner from '../../images/contactBanner.png'
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const page = useLocation()
    return (
        <div>
            <div className={`${page.pathname == '/contact' ? "" : "hidden"} px-[6vw]`}>
                <Banner img={contactBanner} />
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Bizge baylanısıń</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Eger sorawlarıńız yaki usınıslarıńız bolsa, tómendegi forma arqalı baylanısıwıńız múmkin.
                    </p>
                    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                        <form>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Atıńız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Ismingizni kiriting"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email manzil</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Email manzilingizni kiriting"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Xabar</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Xabaringizni kiriting"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
                                >
                                    Xabar jiberiw
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${page.pathname == '/contact' ? "" : "hidden"}`}>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
