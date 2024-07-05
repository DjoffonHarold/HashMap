
class Hashmap {
    constructor(){
        this.map = {}
       
    }

    hash(key){
        let hash = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hash = primeNumber * hash + key.charCodeAt(i)
        }
        return hash;

    }

    set(key, value){
        const hashCode = this.hash(key)
        this.map[hashCode] =  value
    }

    get(key){
        const hashCode = this.hash(key)
        return this.map[hashCode]?  this.map[hashCode].value : null
    }
    has(key){
        const hashCode = this.hash(key)
        return this.map.hasOwnProperty(hashCode)
    }
    remove(key){
        const hashCode = this.hash(key)
        delete this.map[hashCode]
    }
    length(){
        return Object.keys(this.map).length
    }
    clear(){
        this.map = {}
    }
    keys(){
        return Object.values(this.map).map(entry => entry.key)
    }
    values(){
        return Object.values(this.map).map(entry => entry.value)
    }
    entries() {
        return Object.values(this.map).map(entry => [entry.key, entry.value]);
    }
}
export default Hashmap