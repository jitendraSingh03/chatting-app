import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {useState,useEffect} from 'react'
import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [channels,setChannel]=useState([])
    const [{user}] = useStateValue();


    useEffect(() => {
    // run when side bar component load
            db.collection('rooms').onSnapshot( snaphot=>(
                setChannel(
                        snaphot.docs.map((doc)=>({
                        id:doc.id,
                        name:doc.data().name
                    }))
                )
            ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>JS developer :smile_cat:</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon></CreateIcon>
            </div>
            {/* <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
            <SidebarOption Icon={InboxIcon} title='Mention & reactions'/>
            <SidebarOption Icon={DraftsIcon} title='Saved items'/> */}
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browse'/>
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOption Icon={AppsIcon} title='Apps'/>
            {/* <SidebarOption Icon={FileCopyIcon} title='File browser'/> */}
            {/* <hr></hr> */}
            <SidebarOption Icon={ExpandLessIcon} title='show less'/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title='Channels'/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption={true} title='Add Channel'/>
            
            
                {/* connet db and list all Channel */}
                {/* <SidebarOption/> ......*/}
            <div className="sidebar__channels">
                {channels.map(channel=>(
                    <SidebarOption title={channel.name} id={channel.id}/>
                ))}
            </div>


        </div>
    )
}

export default Sidebar
