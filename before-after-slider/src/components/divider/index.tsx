import React, {MutableRefObject, useState, useRef} from 'react';
import {Orientation} from '../../enums/';
import './divider.scss';

interface DividerProps {
    orientation: Orientation;
    setWidth: React.Dispatch<React.SetStateAction<string>>
    panelWidth: number;
}

function MouseMove(event: MouseEvent, overlay: MutableRefObject<HTMLDivElement>, isMouseDown: boolean, offset: number, setWidth: React.Dispatch<React.SetStateAction<string>>, panelWidth: number): void {    
    event.preventDefault();
    if(!isMouseDown){
        return;
    }
    let newPosition = event.pageX + offset;
    if(panelWidth < newPosition) {
        return;
    }
    overlay.current.style.left = newPosition + 'px';
    setWidth(overlay.current.style.left);
}

const Divider = ({orientation, setWidth, panelWidth}: DividerProps) => {    
    const dividerRef: MutableRefObject<HTMLDivElement> = useRef() as MutableRefObject<HTMLDivElement>;
    const [isMouseDown, setMouseDown] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    document.onmouseup = () =>{setMouseDown(false)};
    document.onmousemove = (ev) => {MouseMove(ev, dividerRef, isMouseDown, offset, setWidth, panelWidth)}
    return <div ref={dividerRef} className="divider" onMouseDown={(ev)=>{setMouseDown(true); setOffset(ev.clientX - ev.currentTarget.getBoundingClientRect().left)}}>
        <div className="line" />
        <div className="circle-wrapper">
            <div className="circle" />
        </div>
        <div className="line"/>
    </div>;
};

export default Divider;