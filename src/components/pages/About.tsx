import { useState } from "react";

import { VerticalTabs } from "../widgets/verticalTabs";
import '../../assets/css/font.css';

function About () {

    return (
        <>        
            <div className="flex h-11/12">            
                <div className="grid grid-cols-3">
                    <div className="col-span-3">
                        <div className="flex items-center px-10 py-5 gap-4 w-full bg-gray-700 rounded-t-3xl">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmp
                            wYAAABrUlEQVR4nMWWz0oCURSHzaI/i6BA2gRZlIjULnwADZUotF4hXFgt2rQLAluFj9CmJHqJeoHcJNKuZRDYPiSI+mLgTJ2mcfA2
                            Vztw4czv3jnfPWe83hOJ/KcBI8A2UAVOQ44qsOXE7AabB+6xby0g7peZC7sAcsBqyJEH6gr6namU0bFzg/LvAmvirwM74q8Ax8CQPL
                            vQkn75RMS8AfABOBP/CrgT/wB4AabkuSCxq/rlmohpA+A4EBU/CoypuQnlpyV2zQ/YAG4sj0YQsJ9W8wNmgWnLIxsE7PkbGnzrtDUg
                            MDMwILAHvAFJ60AgI2dtUmm3AlyQuYwVoPzNdWTMihYHPoBrR1PzuVBABXsFNpR+KOvLQeuMgHJ7uEF+7FyVM6a0nKzt6NvBBBgD2l
                            K6itK/yunZREX0tmcjRiVNAk8SaN+vnKKVgXfgGVgO+6NJqUwXveUUzc0sZetYJIAjYMlbTmBU5hJd3v37wQfmgEdgM2hdL0DjC7hX
                            o8sF7HRXjtX7ALyU2EVvE9VyodIAhW2iCgrWBIa9O4krqE1r/moTPZmWLDbCxV+ZDdo+AetcAWdPnLpBAAAAAElFTkSuQmCC"/>
                            <h3 className="text-white ">Code Editor</h3>
                        </div>
                        <div className="h-full">
                            <VerticalTabs/>
                        </div>
                        <div className="col-span-2">

                        </div>
                        
                    </div>
                </div>
            </div>
            
        
        </>
    );
}


export default About;