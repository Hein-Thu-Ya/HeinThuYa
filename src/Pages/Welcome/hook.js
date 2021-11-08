import { GetWelcome } from "../../utils/query"
import { useQuery } from "@apollo/client"

const Init = () => {
    const {data, loading, error} = useQuery(GetWelcome)

    return {data, loading, error}
}

export { Init }