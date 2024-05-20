'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

const SearchForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const url = `${apiUrl}/datas.json`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return; // Ensure data is fetched before filtering

    // Get search params from the URL
    const nameFromUrl = searchParams.get('name') || '';
    const specialtyFromUrl = searchParams.get('specialty') || '';
    const locationFromUrl = searchParams.get('location') || '';

    setName(nameFromUrl);
    setSpecialty(specialtyFromUrl);
    setLocation(locationFromUrl);

    if (nameFromUrl || specialtyFromUrl || locationFromUrl) {
      // Perform initial filtering based on URL params
      const filtered = data.filter(artisan => {
        const nameMatch = nameFromUrl ? artisan.name.toLowerCase().includes(nameFromUrl.toLowerCase()) : true;
        const specialtyMatch = specialtyFromUrl ? artisan.specialty === specialtyFromUrl : true;
        const locationMatch = locationFromUrl ? artisan.location === locationFromUrl : true;

        return nameMatch && specialtyMatch && locationMatch;
      });

      setFilteredData(filtered);
    }
  }, [searchParams, data]);

  const handleSearch = (event) => {
    event.preventDefault();

    
    const params = new URLSearchParams({
      name: name,
      specialty: specialty,
      location: location,
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <Suspense>
    

      
      {pathname.startsWith('/search') && filteredData.length > 0 && (
        <>
        <h2>Resultat</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-5 border-2'>
          
          
          <ul>
            {filteredData.map(artisan => (
              <li key={artisan.id}>
                <h3>{artisan.name}</h3>
                <p>Specialité: {artisan.specialty}</p>
                <p>Localisation: {artisan.location}</p>
                
              </li>
            ))}
          </ul>
          </div>
          </>
        
      )}
    
      </Suspense>
  );
};

export default SearchForm;
