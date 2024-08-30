import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function FooterComponent() {
    return (
        <div className="bg-greenDark text-white py-8">

            <FloatingWhatsApp
                notificationDelay={2}
                avatar={"Logo iglesia"}
                darkMode={true}
                phoneNumber="+573114852071"
                chatMessage="Hola, ¿En qué podemos ayudarte?"
                notification={true}
                notificationSound={true}
                placeholder="Escribe un mensaje"
                accountName="Rios del Amor de Dios"
                statusMessage="Normalmente respondemos en unos minutos"
            />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p className="text-sm">We are a community-focused church dedicated to spreading the word of God and helping those in need.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Services</h3>
                        <ul className="text-sm">
                            <li>Domingo 10:00am</li>
                            <li>Miercoles 7:00pm</li>
                            <li>Youth Group</li>
                            <li>Community Outreach</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <ul className="text-sm">
                            <li><a href="mailto:rioscajica@gmail.com" className="hover:underline">Email: rioscajica@gmail.com</a></li>
                            <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">Phone 1: 3124344686</a></li>
                            <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">Phone 2: 3115086713</a></li>
                            <li>Centro Comercial Sexta, Cl. 5a #6-57, Cajicá, Cundinamarca</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://www.facebook.com/rioscajica" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    <FaFacebook size={24} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    <FaInstagram size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    &copy; 2024 Rios del Amor de Dios. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default FooterComponent