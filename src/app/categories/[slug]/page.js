import Link from "next/link";
const categories = async ({params}) => {
    const artisanID = params.slug;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${apiUrl}/datas.json`;
    const datas = await fetch(url).then((res) => res.json());
    
    const artisanProfile = datas.map(item => item.category.toLowerCase() === artisanID.toLowerCase() ? item : null);
    
  return (

    <>

        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5">
            
        {artisanProfile.map((item, index) => (
    item && ( 
    <>    
        <Link href={`/artisan/${item.id}`}>
            <div className="artisan-card hover:bg-inherit col-span-3 md:col-span-1 gap-10 m-2 p-5 border-2 text-2xl">
                <div 
                    key={index}>
                <h2 className="text-3xl">{item.name}</h2>            
                    <p className="p-2">Specialité: {item.specialty}</p>                            
                    <p className="p-2">Note: {item.note}</p>  
                    <p className="p-2">localisation: {item.location}</p>
                </div>
            </div>
        </Link>
        </>
    )
))}
        </div>
        
        </> 

  )
}

export default categories