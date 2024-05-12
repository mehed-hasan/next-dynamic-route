import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const index = () => {
  let [result, setResult] = useState(null);
  useEffect(() =>{
    const data = fetch("https://admin.reviewxplore.com/api/blogs");
    const res = data.then(res => res.json()).then(result => setResult(result.data))
  },[])
  console.log(result);
  return (
    <div>
      <ul>
        <li style={{ display: "flex", flexDirection: "column" }}>
          {result?.map((item, index) => (
            <Link
              key={index}
              href={`/details/${item.cat}/${item.slug}`}
            >
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default index;