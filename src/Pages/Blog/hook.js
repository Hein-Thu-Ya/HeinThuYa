import { AllArticles } from "../../utils/query";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const Init = () => {
    const [tag, setTags] = useState('all')

    const {data, loading, error} = useQuery(AllArticles, {
        variables: tag === 'all' ? {} : {tags: [tag]}
    })

    return { data, loading, error, setTags }
}

export { Init }