function createStorage(key){
    const store =JSON.parse(localStorage.getItem(key))??{};
    const save = ()=>{
        localStorage.setItem(key,JSON.stringify(store))
    }
    const storage = {
        get(key){
           return store [key];
        },
        set(key,value){
            store[key]=value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
    return storage
}


const ProfileSetting = createStorage('profile setting')

console.log(ProfileSetting.get('fullName'))
ProfileSetting.set('fullName',"tuan hiep")
ProfileSetting.set("Age","21")