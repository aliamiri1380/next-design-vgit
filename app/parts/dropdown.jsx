'use client'

import {filter_keys} from "@/utils";
import {Dropdown, DropdownTrigger, DropdownItem, DropdownMenu} from '@nextui-org/dropdown'


export default (props) => {

    return (
        <Dropdown className='dropdown' placement={"auto"} {...filter_keys(props, ['children'])}>
            <DropdownTrigger>
                {props.children}
            </DropdownTrigger>
            <DropdownMenu variant="flat">
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}