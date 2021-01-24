const sortArray = (tempData, rev=false) =>{
    // console.log("Passed data: ", tempData)
    
    tempData?.sort( (a,b) => -Math.round(a.average_rating)+ Math.round(b.average_rating));

    rev === true && tempData.reverse();

    // console.log("NewData: ", tempData)
    return tempData;
}

export default sortArray;