import { useEffect, useState } from "react"
import { projectFirestore } from '../firebase/config'


export const useDocument = (collection, id) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    //RT data for document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscribe = ref.onSnapshot((snapshot) => {
            setDocuments({...snapshot.data(), id: snapshot.id})
            setError(null)
        }, (err) => {
            console.log(err.message)
            setError('failed to get document')
        })
        // clean up
        return () => unsubscribe()

    }, [collection, id])

    return { document, error }
}