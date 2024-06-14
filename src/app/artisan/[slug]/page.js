import ContactForm from "@/components/ContactForm";

const artisan = async ({params}) => {
    const artisanID = params.slug;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${apiUrl}/datas.json`;
    const datas = await fetch(url).then((res) => res.json());
    const artisanProfile = datas.find(item => item.id === artisanID ? item : null);
  return (
    <>
    <div className=" lg:flex m-10">
        <div className="md:w-2/4">
                {artisanProfile && (
                    <div className="">
                        <h2 className="p-2 text-3xl">{artisanProfile.name}</h2>
                        <p className="p-2">{artisanProfile.note}</p>
                        <p className="p-2">{artisanProfile.speciality}</p>
                        <p className="p-2">{artisanProfile.location}</p>
                        <p className="p-2">{artisanProfile.about}</p>
                        <p className="p-2">{artisanProfile.email}</p>
                        <p className="p-2">{artisanProfile.website}</p>
                        <p className="p-2">{artisanProfile.category}</p>
                    </div>
                )}
            </div>
              <div className="md:w-2/4">
                <ContactForm/>
              </div>
            </div>
    </>
  )
}
export default artisan