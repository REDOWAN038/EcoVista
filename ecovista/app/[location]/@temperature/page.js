import TemperatureComponent from "@/components/TemperatureComponent"
import React from "react"

const TemparaturePage = ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    return <TemperatureComponent lat={latitude} lon={longitude} />
}

export default TemparaturePage
