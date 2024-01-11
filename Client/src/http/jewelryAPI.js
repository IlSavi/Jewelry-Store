import { $authHost, $host } from "./index";
//import { jwtDecode } from "jwt-decode";

export const createType = async(type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async() => {
    const {data} = await $host.get('api/type')
    return data
}

export const createMaterial = async(material) => {
    const {data} = await $authHost.post('api/material', material)
    return data
}

export const fetchMaterials = async() => {
    const {data} = await $host.get('api/material')
    return data
}

export const createJewelry = async(jewelry) => {
    const {data} = await $authHost.post('api/jewelry', jewelry)
    return data
}

export const fetchJewelries = async(typeId, materialId, page, limit = 8) => {
    const {data} = await $host.get('api/jewelry', {params: {
        typeId, materialId, page, limit
    }})
    return data
}

export const fetchOneJewelry = async(id) => {
    const {data} = await $host.get('api/jewelry/' + id)
    return data
}