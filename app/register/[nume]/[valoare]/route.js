import { addInfo, listaDate } from "@/libs/date"

export async function GET(request, context) {
  const params = context.params
  addInfo(params.nume, params.valoare)
  // JSON.stringify(listaDate)
  return new Response("primit")
}