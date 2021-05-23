import React, {MutableRefObject, useState, useRef} from 'react';
import {Orientation} from '../../enums/';
import './divider.scss';

interface DividerProps {
    orientation: Orientation;
    setWidth: React.Dispatch<React.SetStateAction<string>>
}

function MouseMove(event: MouseEvent, overlay: MutableRefObject<HTMLDivElement>, isMouseDown: boolean, offset: number, setWidth: React.Dispatch<React.SetStateAction<string>>): void {    
    event.preventDefault();
    if(!isMouseDown){
        return;
    }
    overlay.current.style.left = (event.pageX + offset) + 'px';
    setWidth(overlay.current.style.left);
}

const Divider = ({orientation, setWidth}: DividerProps) => {    
    const dividerRef: MutableRefObject<HTMLDivElement> = useRef() as MutableRefObject<HTMLDivElement>;
    const [isMouseDown, setMouseDown] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    document.onmouseup = () =>{setMouseDown(false)};
    document.onmousemove = (ev) => {MouseMove(ev, dividerRef, isMouseDown, offset, setWidth)}
    return <div ref={dividerRef} className="divider" onMouseDown={(ev)=>{setMouseDown(true); setOffset(ev.clientX - ev.currentTarget.getBoundingClientRect().left)}}>
        <div className="line" />
        <div className="circle-wrapper">
            <div className="circle" />
        </div>
        <div className="line"/>
    </div>;
};

export default Divider;