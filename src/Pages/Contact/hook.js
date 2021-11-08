import { useQuery } from "@apollo/client";
import { GetContact } from "../../utils/query";

const Init = () => {
    const {data, loading, error} = useQuery(GetContact)

    return{ data, loading, error }
}

export {Init}