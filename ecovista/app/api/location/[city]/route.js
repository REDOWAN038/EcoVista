import { getLocationByName } from "../location-util"

export async function GET(_request, { params }) {
    const locationData = getLocationByName(params?.city)
    return Response.json(locationData)
}
