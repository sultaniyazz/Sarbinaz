import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900  text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex  flex-wrap justify-between gap-8 md:gap-0">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-semibold mb-3">IjaraUy.uz</h2>
                        <p className="text-sm text-gray-400">
                            Bizning platformamiz orqali siz o'zingizga mos ijara uyni tez va qulay  mumkin.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-3">Tezkor Havolalar</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:text-gray-300 transition">Biz haqimizda</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-300 transition">Aloqa</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-300 transition">Ko'p so'raladigan savollar</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-3">Biz bilan bog'laning</h3>
                        <p className="text-sm text-gray-400">
                            Telefon: <a href="tel:+998901234567" className="hover:text-gray-300 transition">+998 90 123 45 67</a>
                        </p>
                        <p className="text-sm text-gray-400">
                            Email: <a href="mailto:support@ijarauj.uz" className="hover:text-gray-300 transition">support@ijarauj.uz</a>
                        </p>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />

                <div className="flex flex-wrap items-center justify-between text-sm text-gray-400">
                    <p className="w-full md:w-auto text-center md:text-left">
                        © {new Date().getFullYear()} IjaraUy.uz. Barcha huquqlar himoyalangan.
                    </p>
                    <ul className="flex space-x-4 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
                        <li>
                            <a href="#" className="hover:text-gray-300 transition">Maxfiylik siyosati</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition">Foydalanish shartlari</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
