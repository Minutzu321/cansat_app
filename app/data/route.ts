import { listaDate } from "@/libs/date";

const culori = [
    "#7776bc",
    "#cdc7e5",
    "#fffbdb",
    "#ffec51",
    "#ff674d",
    "#ffb2e6",
    "#d972ff",
    "#8447ff",
    "#8cffda",
    "#ffffe8"
  ]

function getArrayDummy(nr: number){
    let ad = []
    for (let index = 0; index < nr; index++) {
        ad.push(index)
    }
    return ad
}

export async function GET(request: Request) {
    let maxim = 0;
    
    let rez = {
        datasets: []
    } as any
    let indx = 0;
    for(const k of Object.keys(listaDate)){
        rez['datasets'].push({
            label: k,
            data: listaDate[k].map((posnr: string) => Number.parseFloat(posnr)),
            borderColor: culori[indx%culori.length]
        });
        if(listaDate[k].length > maxim){
            maxim = listaDate[k].length
        }
        indx++;
    }
    rez["labels"] = getArrayDummy(maxim)
    
    // for (let i = 0; i < maxim; i++) {
    //     let parte = {} as any
    //     for(const k of Object.keys(listaDate)){
    //         parte[k] = listaDate[k][i]
    //         if(!parte[k]){
    //             parte[k] = 0;
    //         }else{
    //             try{
    //                 parte[k] = Number.parseFloat(parte[k])
    //             }catch(e){
    //                 parte[k] = 0;
    //             }
    //         }
    //     }
    //     rez.push(parte)
    // }
    return new Response(JSON.stringify(rez))
  }