import React, { useEffect, useState, useRef } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import InitialData from "./initialData";
import {Link} from "react-router-dom"
 
import "./styles.scss";
 
export default function Draw() {
  const excalidrawRef = useRef(null);
 
  const [viewModeEnabled, setViewModeEnabled] = useState(false);
  const [zenModeEnabled, setZenModeEnabled] = useState(false);
  const [gridModeEnabled, setGridModeEnabled] = useState(false);


 
  return (
    <div>
        {/* <div class="navbar-fixed">
            <nav className="black">
            <div class="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">Manage Tasks</a>
                <ul class="right hide-on-med-and-down">
                <li>
                <a
                    onClick={() => {
                        excalidrawRef.current.resetScene();
                    }}
                    >
                    Reset Scene
                    </a>
                </li>
                <li>
                    <label>
                    <input
                        type="checkbox"
                        checked={viewModeEnabled}
                        onChange={() => setViewModeEnabled(!viewModeEnabled)}
                    />
                    <a>View mode</a>
                    </label>
                    </li>
                <li>
                <label>
                    <input
                        type="checkbox"
                        checked={zenModeEnabled}
                        onChange={() => setZenModeEnabled(!zenModeEnabled)}
                    />
                    <a>Zen mode</a>
                    </label>
                    </li>
                <li>
                <label>
                    <input
                        type="checkbox"
                        checked={gridModeEnabled}
                        onChange={() => setGridModeEnabled(!gridModeEnabled)}
                    />
                    <a>Grid mode</a>
                    </label>
                    </li>
                </ul>
            </div>
            </nav>
            
        </div>


                    
  <ul id="slide-out" class="sidenav">
    <li><a href="/newTask">Add a new Task</a></li>
    <li><div class="divider"></div></li>
    <li><a href="/pendingTask">View Pending Tasks</a></li>
    <li><div class="divider"></div></li>
    <li><a href="/allTask">View all Tasks</a></li>
    <li><div class="divider"></div></li>

    
          <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">undo</i></button><br/>
          <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">personal_video</i></button><br/>
          <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">grid_on</i></button>
  </ul> */}
        <div className="matnavbar">
          <ul className="matnavbar-nav">
            <li className="matnav-item">
              <Link to="allTask" className="matnav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tasks" class="svg-inline--fa fa-tasks fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                <span className="link-text">Manage Tasks</span>
              </Link>
            </li>
            <li className="matnav-item">
              <a href="#" className="matnav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="undo-alt" class="svg-inline--fa fa-undo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"></path></svg>
                <span className="link-text">
                <span
                    onClick={() => {
                        excalidrawRef.current.resetScene();
                    }}
                    >
                    Reset Scene
                    </span>
                </span>
              </a>
            </li>
            <li className="matnav-item">
              <a href="#" className="matnav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-large" class="svg-inline--fa fa-th-large fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg>
                <span className="link-text">
                <label>
                    <input
                        type="checkbox"
                        checked={gridModeEnabled}
                        onChange={() => setGridModeEnabled(!gridModeEnabled)}
                    />
                    <span>Grid mode</span>
                    </label>
                </span>
              </a>
            </li>
            <li className="matnav-item">
              <a href="#" className="matnav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                <span className="link-text">
                <label>
                    <input
                        type="checkbox"
                        checked={viewModeEnabled}
                        onChange={() => setViewModeEnabled(!viewModeEnabled)}
                    />
                    <span>View mode</span>
                    </label>
                </span>
              </a>
            </li>
            <li className="matnav-item">
              <a href="#" className="matnav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" class="svg-inline--fa fa-desktop fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
                <span className="link-text">
                <label>
                    <input
                        type="checkbox"
                        checked={zenModeEnabled}
                        onChange={() => setZenModeEnabled(!zenModeEnabled)}
                    />
                    <span>Zen mode</span>
                    </label>
                </span>
              </a>
            </li>
          </ul>
        </div>

      <div className="excalidraw-wrapper">
      
        <Excalidraw
          ref={excalidrawRef}
          initialData={InitialData}
          onChange={(elements, state) =>
            console.log("Elements :", elements, "State : ", state)
          }
          onPointerUpdate={(payload) => console.log(payload)}
          onCollabButtonClick={() =>
            window.alert("You clicked on collab button")
          }
          viewModeEnabled={viewModeEnabled}
          zenModeEnabled={zenModeEnabled}
          gridModeEnabled={gridModeEnabled}
        />
      </div>
      
    </div>
  );
}