import { useState } from "react";

type FolderValues = {
    title: string;
    icon: string;
    isFolder?: boolean;
    folderContent?: [];
};

const Folder = ({ title, icon }: FolderValues) => {
    return (
        <div className={`flex items-center w-full px-5 py-2 gap-2 cursor-pointer`}>
            <div className="flex items-center">
                <img src={icon} alt={title} />
            </div>
            <span className="text-xs">{title}</span>
        </div>
    );
};

const FolderContainer = () => {
    const [activeFolder, setActiveFolder] = useState<number | null>(null);

    const folders: FolderValues[] = [        
        {
            title: "Technology Stack",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVR4nGNgGBTg/yoG5v8LGDz/z2cIhePFDHzEGzCfofn/Aob/KHg+wzGiDfm/QeDo/xNq//+f0iAOH1f793+XWBvCgP2yj4jWDMP7ZB8iDDikeIFkAw4pXkAYcEpjFckGnNJYNWqABnIYqDeRHIgn1RtRk/JJNY//J9VDicNqHiA9RCd1mgIAmj+mIQ1gJe8AAAAASUVORK5CYII=",
            isFolder: true,
        },
        {
            title: "My Work",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nM2QsQmAMBBFBRv30tpOSCcOFN3DQpzCwll0AJs8OUhxaJSkET98Qi53j5/Lsl8KmLlrSgE4IFf3XGpvAx1wEC/pbTVgBExCQiMzV0CTAGj+CbD+QXsHtkDdhgCLP7Wd97W+RH0BqIDykx0MwBqI+mTp7TWgAOrAsp4svUVs4led+tp7xY9v1zkAAAAASUVORK5CYII=",
            isFolder: true,
        },
        {
            title: "Readme.md",
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4klEQVR4nM3Tv0pDMRiG8bMrVnAplSIILlrbpeIg/qsVpw7i4Fi8hkILupSC4Oji4OrgPXgpLnopPzmQA4eQc8ROBh4SeJPnIwlflpUGuhhWsJXVDezjHpNALPjETp3grEwiX+AZ7WUFbxjhA41lBEfhKpNUnv0miPf9MwGaeI2YVVDkzVT1FbSCsIFVbIR5DevYxgVOU4JbPGKKg1BpjDu84wVzXOIkFpzjELthnVfZC3MfN+jhGlc4Lgva+A5VCp4qyLMvbMYPOfjDLwxSQd5MDzXNVJDv6VTZ69q5oFs+9AMfRgcwzWevvAAAAABJRU5ErkJggg==",            
        },
    ];

    const toggleActiveFolder = (index: number) => {
        if (activeFolder === index) {
            // Clicked on an already active folder, so deactivate it
            setActiveFolder(null);
        } else {
            // Clicked on a different folder, so activate it
            setActiveFolder(index);
        }
    };

    return (
        <div>
            {folders.map((folder, index) => (
                <div
                    key={index}
                    className={`${
                        activeFolder === index
                        ? "bg-custom-hover-color"
                        : "bg-custom-bg-color"
                    }`}
                    onClick={() => toggleActiveFolder(index)}
                >
                    {folder.isFolder ? (
                        <div className="flex px-5">
                            <div className="flex items-center">
                                {/* if clicked */}
                                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZUlEQVR4nO2QwQmAMBAEr4kr657pQouxjRTmQ9AWRg5PkCREnz4yr8AOm2RFBj8CmIEF0I6j4Uyt8OBiA1IjT5E5e6vAHoKT40aN84071ntiLuSq9MseBqxFUfWttxKNwbrDykBO+GGm5e8H1UgAAAAASUVORK5CYII="> */}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nM2Syw1AQBRFpwhDVWJFFRRDF9goyye0cETmJWzdhXH29+R9rnO/BWiAA8hVQUdgBbwiSIDZJJM6RcFNqUoGE2xApgi83eGijSIYHyukb8OVfETCGxcL91GKVAO7XOXPOAE1y6b05APYDgAAAABJRU5ErkJggg=="></img>
                            </div>
                            <Folder title={folder.title} icon={folder.icon} />
                        </div>
                        
                    ) : (
                        <div className="flex px-9">
                            <Folder title={folder.title} icon={folder.icon} />
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default FolderContainer;
