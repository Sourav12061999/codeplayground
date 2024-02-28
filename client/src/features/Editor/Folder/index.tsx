import React from 'react'
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { MdOutlineExpandMore } from "react-icons/md";

import { HiChevronRight } from "react-icons/hi2";
import { CiFolderOn } from "react-icons/ci";
import { TbFileTypeJsx } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import folders from "../../../dummy/code";




function FolderStructure() {
    return (
        <div style={{ width: "200px", backgroundColor: "#37474F", minHeight: "100vh", color: "#FFF" }}>
            <TreeView
                defaultCollapseIcon={<MdOutlineExpandMore />}
                defaultExpandIcon={<HiChevronRight />}
            >
                {
                    folders.map((child: any) => {
                        if (child.type === "folder") {
                            return <Folder id={1} name={child.name} children={child.children} />
                        } else {
                            return <File id={1} name={child.name} extension={child.extension} content={child.content} />
                        }
                    })
                }
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                </TreeItem>
            </TreeView>
        </div>
    )
}

export default FolderStructure

function Folder({ id, name, children }: { id: number, name: string, children: any[] }) {
    return <TreeItem nodeId={`${id}`} label={name}>
        {
            children.map((child) => {
                if (child.type === "folder") {
                    return <Folder id={1} name={child.name} children={child.children} />
                } else {
                    return <File id={1} name={child.name} extension={child.extension} content={child.extension} />
                }
            })
        }
    </TreeItem>
}

function File({ id, name, extension, content }: { id: number, name: string, extension: string, content: string }) {
    return <TreeItem nodeId={`${id}`} label={`${name}.${extension}`} />
}