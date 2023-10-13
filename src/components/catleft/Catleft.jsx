import React, {useState} from 'react';
import "./catleft.css";
import { catagory } from "../../data"


export default function Catleft() {
    const [value, setValue] = useState(100.00); // Giá trị ban đầu

    const handleSliderChange = (event) => {
        setValue(parseFloat(event.target.value).toFixed(2));
    }
  return (
    <div className="category-left">
                        {catagory.map((item, index) => (
                            <div className="category-left1" key={index}>
                                <h5>{item.title}</h5>
                                {item.detail.map((i) => (
                                    <div key={i.name} className="left-content">
                                        <input type="checkbox" />
                                        <b>{i.name}</b>
                                        <h4>{i.number}</h4>
                                    </div>

                                ))}
                            </div>
                        ))}



                        <div className="category-price">
                            <h5>PRICE</h5>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="0.01"
                                value={value}
                                className="thang-price"
                                onChange={handleSliderChange}
                            />
                            <p>Max.$ {value}</p>
                        </div>

                    </div>
  )
}
