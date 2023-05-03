export let listaDate = {} as any

export function addInfo(key: string, param: string){
    if(listaDate.hasOwnProperty(key)){
        listaDate[key].push(param)
    }else{
        listaDate[key] = [param]
    }
}

export function clearInfo(){
    listaDate = {}
}