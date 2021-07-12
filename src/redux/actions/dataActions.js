import db from "../../components/firebase";
export const getUsers = () => (dispatch) => {
  let users = [];
  db.collection("users").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
  });

  dispatch({
    type: "GET_USERS",
    payload: users,
  });
};

export const selectUser = (user) => (dispatch) => {
  dispatch({
    type: "SELECT_USER",
    payload: user,
  });
};
