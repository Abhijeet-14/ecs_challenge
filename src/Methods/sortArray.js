const sortArray = (tempData, rev=false) =>{
    
    tempData?.sort( (a,b) => -Math.round(a.average_rating)+ Math.round(b.average_rating));

    rev === true && tempData.reverse();

    return tempData;
}

export default sortArray;