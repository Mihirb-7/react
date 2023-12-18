import {useEffect, useState} from "react"

//mostly api call value is in string format so we have to handle it

function useCurrencyInfo(currency){                      //"use" is written bcoz it is a standard set -- we can also not write use 
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)     // fecth call
        .then((res) => res.json())        //converting response to json
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])       //dependency  is when we change currency value then the fn will be called        
    //api calling when load / used                                               
    // some hooks take optional argument but here we are giving argument

    console.log(data);
    return data
}

export default useCurrencyInfo;