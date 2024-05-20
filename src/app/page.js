'use client'
import Image from "next/image";
import datas from "/public/datas";
import Link from "next/link";

export default function Home() {
 

  
  const top = true;

  return (
    <>
        <h1 className="p-5 m-5 flex lg-justify-start text-3xl">Comment trouver ton artisan</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-5 items-end">
          <div className="md:col-span-1 mb-20">
            <div>
            <Image
              src="/menu-145776_640.webp"
              alt="photo menu"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
            </div>
            <div>
              <h3 className="text-2xl m-5 text-gray-700">
                1.Choisir la catégorie d’artisanat dans le menu.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1 mb-20">
            <div>
            <Image
              src="/man-5690424_640.webp"
              alt="photo menu"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              priority
            />
            </div>
            <div>
              <h3 className="text-2xl m-5 text-gray-700">
                2.Choisir un artisan.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1 mb-20">
            <div>
            <Image
              src="/call-center-7040784_640.webp"
              alt="photo menu"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
            </div>
            <div>
              <h3 className="text-2xl m-5 text-gray-700">
                3.Le contacter via le formulaire de contact.
              </h3>
            </div>
          </div>
          <div className="md:col-span-1 mb-20">
            <div>
            <Image
              src="/chat-1873543_640.webp"
              alt="photo menu"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            </div>
            <div className="md:col-span-1 mb-5">
              <h3 className="text-2xl mb-5 text-gray-700">
                4.Une réponse sera apportée sous 48h.
              </h3>
            </div>
          </div>
        </div>

        <h2 className="p-5 mt-20 flex lg:justify-end text-3xl">Les trois artisan du mois</h2>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5'>
            
            {datas.map(item => (
              (top===item.top)
               && (
                
                    <div
                        key={item.id}
                        className="border-2"
                    >
                      
                        <ul className="artisan-card-top hover:bg-inherit text-2xl font-bold">
                        <Link href={`/artisan/${item.id}`}>
                          <li><h5 className="text-3xl">{item.name}</h5></li>

                          <li>{item.category}</li>
                          <li>{item.location}</li>
                          <li>{item.note}</li>
                          </Link>
                        </ul>
                      
              </div>
              
            )))}

        </div>
    </>
  );
}
