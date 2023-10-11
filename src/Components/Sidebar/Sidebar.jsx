import { useState } from "react"
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core"
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal
} from "@tabler/icons-react"
import { MantineLogo } from "@mantine/ds"
import classes from "./Sidebar.module.css"
import {Link} from 'react-router-dom'
import React from 'react'
import { Navigate } from "react-router-dom";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconHome2, label: "Home", link:"/dashboard/home" },
  { icon: IconGauge, label: "Dashboard", link:"/dashboard/cards" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", link:"/dashboard/history" },
  { icon: IconCalendarStats, label: "Releases", link:"/dashboard/cards" },
  { icon: IconUser, label: "Account", link:"/dashboard/cards" },
  { icon: IconFingerprint, label: "Security", link:"/dashboard/cards" },
  { icon: IconSettings, label: "Settings", link:"/dashboard/cards" }
]

export default function Sidebar() {
  const [active, setActive] = useState(0)
  const [gotoHome, setgotoHome] = React.useState(false);

  if (gotoHome) {
    return <Navigate to="/" />;
  }
  const links = mockdata.map((link, index) => (
    <Link to= {link.link} key={link.label}  >  <NavbarLink 

      {...link}
      key={link.label}
      active={index === active}
      
      onClick={() => setActive(index)}
    />
   </Link>
  ))

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" onClick={()=>{setgotoHome(true)}}/>
      </Stack>
    </nav>
  )
}
