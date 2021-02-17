import {useRouter} from 'next/router'
const article = (props) => {
    const router = useRouter();
    const { id } = router.query;
    console.log(props)
    return (
        <h1>
            This is an article {id}
        </h1>
    )
}

export default article
