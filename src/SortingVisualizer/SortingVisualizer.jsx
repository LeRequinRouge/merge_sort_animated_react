import React from "react";
import "./SortingVisualizer.css"
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';

const ANIMATION_SPEED_MS = 1;

const PRIMARY_COLOR = 'red';

const SECONDARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component 
{
	constructor(props) {
		super(props);

		this.state = {
			array: [],
		};
	}

  componentDidMount() 
  {
		this.resetArray();
	}

  resetArray() 
  {
		const array = [];
		for (let i = 0; i < 355; i++) {
            array.push(randomIntFromInterval(5, 750));
		}
		this.setState({array});
    }
    
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) 
    {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
    } 
      else 
      {
        setTimeout(() => 
        {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

      selectionSort()
     {
        //TODO
     }

  render() 
  {
        const {array} = this.state;
        
        return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar"
                key={idx} 
                style={{height: `${value}px`}}> </div>
            ))}
            <button className="button" onClick={() => this.resetArray()}>Renew Array</button>
            <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
            <button className="button" onClick={() => this.selectionSort()}>Selection Sort</button>
                </div>
        )
	}
}

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}