import  React, {useState, useEffect} from 'react';
import { ItStatement } from './ItStatement';
import { TestingBlock } from './TestingBlock';
import {useSelector, useDispatch} from 'react-redux';
import { UpdateKeyOfIt, UpdateDescribe, UpdateComponentName,  } from '../reduxComponents/actions/actions';

interface Props{
  describeProp:string
}




export const DescribeBlock:React.FC<Props> = ({describeProp}) => {

  const globalDescribeObj = useSelector((state:any) => state.describes)
  const index = useSelector((state: any) => state.keyOfIt)
  const componentObj = useSelector((state: any) => state.componentObj);

  
  
  let [arrayOfIt, updateItArray] = useState([])
  let [componentName, updateName] = useState('')


  const dispatch = useDispatch();

  const updateItKey = () => dispatch(UpdateKeyOfIt())
  const updateGlobalDescribe = (data:any) => dispatch(UpdateDescribe(data))
  const updateComponentName = (name:string) => dispatch(UpdateComponentName(name))


  const storeval: {[k:string]:any}= {}
  storeval[`${index}`]  = ''


  
  useEffect(async():Promise<void> =>{
    let itComponent: {[k:string]:any}= {}
    // creates a key value pair that will hold the index and the component 
    itComponent[`${index}`] = await (<ItStatement key = {`${index}`} id = {`${index}`} itProp ={`${index}`}/>)
    // update the array to be displayed with the component that was created
    updateItArray(arrayOfIt.concat(itComponent[`${index}`]))
    // update the key value of the it statements
    updateItKey()
  }, [])




  async function addIt(){
    let itComponent: {[k:string]:any}= {}
    itComponent[`${index}`] = await (<ItStatement key = {`${index}`} id = {`${index}`} itProp ={`${index}`}/>)
    // add the index of the created it component to the object holding all describe blocks
    // globalDescribeObj[`${describeProp}`] = globalDescribeObj[`${describeProp}`].concat(index)
    console.log(globalDescribeObj[`${describeProp}`] )
    globalDescribeObj[`${describeProp}`][index] = ''
    // updates the describe element in the store
    updateGlobalDescribe(globalDescribeObj)
    // updates the array to be displayed
    updateItArray(arrayOfIt.concat(itComponent[`${index}`]))
    // increment the number of it statements since one was added 
    updateItKey()
  }

  function addComponentName(input: any) {
    componentObj[describeProp] = input;
    // console.log(componentObj)
    updateComponentName(componentObj)
  }
  

  return (
    <div className ='describeBlock'>
      <div>
        <p>Describe Block</p>
        <input type="text" onChange={(e) => addComponentName(e.target.value)} placeholder="What functionality should the component have?"/>
        <TestingBlock/>
        {/* pass in prop so that it knows which It statement it belongs to  */}
        {arrayOfIt}
      </div>
      <button onClick = {addIt}>Add It Statement</button>
    </div>
    
  )

}

