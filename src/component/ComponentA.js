import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux/cakes/cakesAction'
import {buyIcecream} from '../redux/icecream/icecreamAction'

function ComponentA() {
    const noOfCakes=useSelector(state=>state.cake.numberOfCakes)
    const noOfIcecream=useSelector(state=>state.icecream.noOfIcecream)

    const dispatch = useDispatch();
    return (
        <div>
            <h2>*) number of cakes- {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

            <h2> number of Icecreams -{noOfIcecream}</h2>
            <button onClick={()=>dispatch(buyIcecream())}>Buy Cake</button>

            <h4>1) first we create initial data</h4>
            <h4>2) we create reduces</h4>
            <h4>3) we create action methods</h4>
            <h4>4) we create store</h4>
            <h4>5) we setup app (root) </h4>
            <h4>6) we add useDispatch and useSelector</h4>
        </div>
    )
}

export default ComponentA
