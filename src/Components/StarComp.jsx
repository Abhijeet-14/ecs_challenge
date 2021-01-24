import React from 'react'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

function StarComp({val}) {
    var star = val;
    return (
        <div>
            
            {star-- > 0 ? <Star color="primary"/>: <StarBorder />}
            {star-- > 0 ? <Star color="primary"/>: <StarBorder />}
            {star-- > 0 ? <Star color="primary"/>: <StarBorder />}
            {star-- > 0 ? <Star color="primary"/>: <StarBorder />}
            {star-- > 0 ? <Star color="primary"/>: <StarBorder />}
        </div>
    )
}

export default StarComp
