import { writable } from "svelte/store";
import { isLoading } from "./loadingStore";

export const universities = writable([])

export const getUniversities = async (name = '', country = 'indonesia') => {
    isLoading.set(true)
    try {
        const response = await fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)
        const result = await response.json()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const uniqueUniversities: any = [...new Map(result.map((university: any) => [university.name, university])).values()];

        universities.set(uniqueUniversities)
    } catch (error) {
        console.log(error)
    }
    isLoading.set(false)
}

getUniversities()