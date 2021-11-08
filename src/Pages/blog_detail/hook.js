import { useQuery } from "@apollo/client";
import { ArticleDetail } from "../../utils/query";
import { useParams } from "react-router";

const Init = () => {

    const {id} = useParams();

    const {data, loading, error} = useQuery(ArticleDetail, {
        variables: {id: id}
    })

    return{ data, loading, error }
}

export {Init}