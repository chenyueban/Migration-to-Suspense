import React, { Suspense } from 'react';
import Spinner from './Spinner';
import fetchAPI from './fetchAPI';

import { unstable_createResource } from 'react-cache'

const photooResource = unstable_createResource(() => fetchAPI('/profile/photo'))
const introResource = unstable_createResource(() => fetchAPI('/profile/intro'))

function Profile() {
  const profilePicture = photooResource.read()
  const intro = introResource.read()
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="profile-picture">
          <img src={profilePicture} alt=""/>
        </div>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <div className="profile-intro">
          {
            intro.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))
          }
        </div>
      </Suspense>
    </>
  );
}

export default Profile;
