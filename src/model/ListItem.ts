export interface item {
    id: string,
    item: string,
    isChecked: boolean
}

export default class ListItem implements item {
    constructor (
        private _id: string = '', 
        private _item: string = '', 
        private _isChecked: boolean = false){}

    get id (){
        return this._id
    }
    set id (id: string) {
        this._id = id
    }

    get item (){
        return this._item
    }
    set item (item: string) {
        this._item = item
    }
    
    get isChecked (){
        return this._isChecked
    }
    set isChecked (isChecked: boolean) {
        this._isChecked = isChecked
    }
}