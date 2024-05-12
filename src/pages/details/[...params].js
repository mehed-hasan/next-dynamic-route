import { useRouter } from 'next/router';
import React from 'react';

const Details = () => {

    return (
        <div>
            <p>

            </p>
        </div>
    );
};

export async function getStaticPaths() {

}
export async function getStaticProps({ params }) {
  const [postId] = params.params;
  console.log(postId);
  return;
}

export default Details;