import jwt_decode from "jwt-decode";
import { isPast } from "date-fns";
import { useHistory } from "react-router-dom";

export function CheckLsForUser() {
  const history = useHistory();
  const token = localStorage.getItem("insta");
  if (token) {
    const user = jwt_decode(token);
    const result = isPast(new Date(user.exp * 1000));
    // 1000 ile çarpıp tarih formatına çeviriyorum.
    if (result) {
      history.push("/");
      // result true ise exp date ex olmuş oluyor. o yüzden null dönmeli
      return null;
    } else {
      return user;
    }
    // to do : exp date deneyeceğim için direkt return yapmadım.
  } else {
    history.push("/login");
    return null;
  }
}
