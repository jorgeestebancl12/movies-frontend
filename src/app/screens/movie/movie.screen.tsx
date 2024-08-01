// Core
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Services
import { Movie } from "../../api";

// Contexts
import { LoaderContext } from "../../contexts/loader/loader.context";

export function MovieScreen() {
  const params = useParams();

  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    if (params.id) {
      setLoading(true);
      Movie.getMovie(params.id)
        .then((success) => {
          console.log(success.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.id]);

  return <></>;
}
