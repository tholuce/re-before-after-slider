import { getByPlaceholderText } from '@testing-library/dom';
import React, {MutableRefObject, useState, useRef} from 'react';
import {Orientation} from '../../enums/';
import './divider.scss';

interface DividerProps {
    orientation: Orientation;
    setWidth: React.Dispatch<React.SetStateAction<string>>
    slider: MutableRefObject<HTMLDivElement>
}

function MouseMove(event: MouseEvent, overlay: MutableRefObject<HTMLDivElement>, slider: MutableRefObject<HTMLDivElement>, isMouseDown: boolean, setWidth: React.Dispatch<React.SetStateAction<string>>): void {    
    event.preventDefault();
    if(!isMouseDown){
        return;
    }
    
    // if(panelWidth < newPosition) {
    //     return;
    // }
    let box = slider.current.getBoundingClientRect();
    
    let newPosition = Math.max(Math.min(event.pageX - box.left, box.width), 0);
    console.log(newPosition);
    overlay.current.style.left = newPosition + 'px';
    setWidth(overlay.current.style.left);
}

const Divider = ({orientation, setWidth, slider}: DividerProps) => {    
    const dividerRef: MutableRefObject<HTMLDivElement> = useRef() as MutableRefObject<HTMLDivElement>;
    const [isMouseDown, setMouseDown] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    document.onmouseup = () =>{setMouseDown(false)};
    document.onmousemove = (ev) => {MouseMove(ev, dividerRef, slider, isMouseDown, setWidth)}
    return <div ref={dividerRef} className="divider" onMouseDown={(ev)=>{setMouseDown(true); setOffset(ev.clientX - ev.currentTarget.getBoundingClientRect().left)}}>
        <div className="line" />
        <div className="circle-wrapper">
            <div className="circle" />
        </div>
        <div className="line"/>
    </div>;
};

export default Divider;