import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import React, { useEffect, useState } from "react";
import speakerData from "@/components/SpeakerData";
import SpeakerDetail from "@/components/SpeakerDetail";

const speakers = ({}) => {
  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
    });
    setSpeakerList(speakerData);
    return () => {
      console.log("cleanup");
    };
  }, []);

  isLoading ? <div>Loading...</div> : "";

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {speakerList.map(({ id, bio, firstName, lastName, favorite }) => {
              return (
                <SpeakerDetail
                  key={id}
                  id={id}
                  bio={bio}
                  firstName={firstName}
                  lastName={lastName}
                  favorite={favorite}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default speakers;
