import ListItem from "./ListItem"
// ما یه کلس میخوایم که همه کارهامونو انجام بده . کارهامون چیا هستن؟ یک اینکه یه لیست توی خودش داشته باشه که یک آرایه‌ست در واقع. دو اینکه موقع لود شدن صفحه هرچیزی که توی لوکال استوریج هست رو لود کنه برامون و پارسش میکنه و یه
// فور ایچ میزنه روش و یه لیست آیتم ازش میسازه و پراپرتی هارو بهش پاس میده 

// یه متد سیو هم باید داشته باشه که ست آیتم کنه توی لوکال استوریج لیستمونو
// یه متد کلیر هم باید داشته باشه که لیستمونو کلیر کنه 
// یه متد اد آیتم هم باید داشته باشه که آیتم ها رو در قالب تایپ لیست آیتم به لیستمون اضاف کنه و سیو کنه 
// یه ریمو آیتم هم داریم که ریمو میکنه هر آیتمی که آیدیشو بهش بدیمو

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj:ListItem): void ,
    removeItem(id: string): void 
}

export default class FullList implements List {

    static instance: FullList = new FullList()
    private constructor(private _list: ListItem[] = []){}
    
    get list (): ListItem[] {
        return this._list
    }
    set list (list: ListItem[]) {
        this._list = list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== 'string') return    // ERROR HANDLING !!!!

        const parsedList: {_id: string, _item: string, _isChecked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._isChecked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}