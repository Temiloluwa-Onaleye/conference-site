import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import speakerData from "@/components/SpeakerData";
import SpeakerDetail from "@/components/SpeakerDetail";
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ConfigContext } from "./_app";
import speakersReducer from "@/components/speakersReducer";

const speakers = () => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  // const [speakerList, setSpeakerList] = useState([]);

  const [speakerList, dispatch] = useReducer(speakersReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = speakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      // setSpeakerList(speakerData);
      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter,
      });
    });

    return () => {
      console.log("cleanup");
    };
  }, []);

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionId"].value);

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId,
    });
  }, []);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const speakerListFiltered = isLoading
    ? []
    : speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 chekbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default speakers;

// import { Header } from "@/components/Header";
// import { Menu } from "@/components/Menu";
// import React, { useContext, useEffect, useReducer, useState } from "react";
// import speakerData from "@/components/SpeakerData";
// import SpeakerDetail from "@/components/SpeakerDetail";
// import { ConfigContext } from "./_app";

// const speakers = ({}) => {
//   const speakerReducer = (action, state) => {
//     switch (action.type) {
//       case "setSpeakerList": {
//         return action.data;
//       }
//       default:
//         return state;
//     }
//   };

//   const [speakerList, dispatch] = useReducer(speakerReducer, []);
//   const [isLoading, setIsLoading] = useState(true);
//   const [speakingSaturday, setSpeakingSaturday] = useState(true);
//   const [speakingSunday, setSpeakingSunday] = useState(true);

//   const context = useContext(ConfigContext);
//   useEffect(() => {
//     setIsLoading(true);
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve();
//       }, 1000);
//     }).then(() => {
//       setIsLoading(false);
//     });
//     // setSpeakerList(speakerData);
//     dispatch({
//       type: "setSpeakerList",
//       data: speakerListFiltered,
//     });
//     return () => {
//       console.log("cleanup");
//     };
//   }, []);

//   const heartFavoriteHandler = (e, favoriteValue) => {
//     e.preventDefault();
//     const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
//     setSpeakerList(
//       speakerList.map((item) => {
//         if (item.id === sessionId) {
//           return { ...item, favorite: favoriteValue };
//         }
//         return item;
//       })
//     );
//   };

//   const handleChangeSaturday = () => {
//     setSpeakingSaturday(!speakingSaturday);
//   };

//   const handleChangeSunday = () => {
//     setSpeakingSunday(!speakingSunday);
//   };

//   isLoading ? <div>Loading...</div> : "";

//   const speakerListFiltered = isLoading
//     ? []
//     : speakerList
//         .filter(
//           ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
//         )
//         .sort(function (a, b) {
//           if (a.firstName < b.firstName) {
//             return -1;
//           }
//           if (a.firstName > b.firstName) {
//             return 1;
//           }
//           return 0;
//         });

//   return (
//     <div>
//       <Header />
//       <Menu />
//       <div className="container">
//         <div className="btn-toolbar margintopbottom5 chekbox-bigger">
//           {context.showSpeakerSpeakingDays === false ? null : (
//             <div className="hide">
//               <div className="form-check-inline">
//                 <label className="form-check-label">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     onChange={handleChangeSaturday}
//                     checked={speakingSaturday}
//                   />
//                   Saturday Speakers
//                 </label>
//               </div>
//               <div className="form-check-inline">
//                 <label className="form-check-label">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     onChange={handleChangeSunday}
//                     checked={speakingSunday}
//                   />
//                   Sunday Speakers
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="row">
//           <div className="card-deck">
//             {speakerListFiltered.map(
//               ({ id, bio, firstName, lastName, favorite }) => {
//                 return (
//                   <SpeakerDetail
//                     key={id}
//                     id={id}
//                     bio={bio}
//                     firstName={firstName}
//                     lastName={lastName}
//                     favorite={favorite}
//                     onHeartFavoriteHandler={heartFavoriteHandler}
//                   />
//                 );
//               }
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default speakers;
