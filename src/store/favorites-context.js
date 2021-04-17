import { createContext, useState } from "react";

// 1. create the Context component using createContext hook passing the initial state
// 2. form the object to be passed as props into the context component

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // use the previous state to update the state if you are depending on the previous state
    setUserFavorites((previousFavorites) => {
      return previousFavorites.concat(favoriteMeetup);
      // concat is like push but returns a new array
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((previousFavorites) => {
      // filter filters out the item that matches the condition and returns a new array
      return previousFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => {
      // some item in the array matches the condition
      return meetup.id === meetupId;
    });
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
