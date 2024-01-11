import {makeAutoObservable} from "mobx";

export default class JewelryStore {
    constructor() {
        this._types = []
        this._materials = []
        this._jewelries = []
        this._selectedType = {}
        this._selectedMaterial = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setMaterials(materials) {
        this._materials = materials
    }
    setJewelries(jewelries) {
        this._jewelries = jewelries
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedMaterial(material) {
        this.setPage(1)
        this._selectedMaterial = material
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get materials() {
        return this._materials
    }
    get jewelries() {
        return this._jewelries
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedMaterial() {
        return this._selectedMaterial
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}