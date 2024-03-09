import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Box, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import TableViewIcon from '@mui/icons-material/TableView'
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'

const SideBar = () => {
  const [isCollapsed, setisCollapsed] = useState(true)
  const [toggled, setToggled] = useState(false)
  const [broken, setBroken] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="ms"
        style={{ height: '100%' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <Menu iconShape="square">
              {/* LOGO */}
              <MenuItem
                onClick={() => setisCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: '10px 0 20px 0',
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography>WE LIVE APP</Typography>
                    <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>

              <MenuItem
                icon={<HomeOutlinedIcon />}
                onClick={() => navigate('/')}
              >
                Dashboard
              </MenuItem>

              <SubMenu icon={<MapOutlinedIcon />} label="Data">
                <MenuItem
                  icon={<TableViewIcon />}
                  onClick={() => navigate('/stock')}
                >
                  คลังสินค้า
                </MenuItem>

                <MenuItem
                  icon={<AddBusinessOutlinedIcon />}
                  onClick={() => navigate('/db/create')}
                >
                  เพิ่มสินค้า
                </MenuItem>

                <MenuItem
                  icon={<EditNoteOutlinedIcon />}
                  onClick={() => navigate('/db/update')}
                >
                  แก้ไขสินค้า
                </MenuItem>

                <MenuItem
                  icon={<RemoveShoppingCartOutlinedIcon />}
                  onClick={() => navigate('/db/delete')}
                >
                  ลบสินค้า
                </MenuItem>

                <MenuItem
                  icon={<DataObjectOutlinedIcon />}
                  onClick={() => navigate('/db/cfcode')}
                >
                  จัดการ CF CODE
                </MenuItem>
              </SubMenu>

              <SubMenu
                label="พื้นที่สำหรับ Admin"
                icon={<AdminPanelSettingsOutlinedIcon />}
              >
                <MenuItem onClick={() => navigate('/db/admininvoice')}>
                  ส่งใบแจ้งชำระเงิน
                </MenuItem>
              </SubMenu>

              <SubMenu
                label="พื้นที่สำหรับ User"
                icon={<PersonOutlineOutlinedIcon />}
              >
                <MenuItem onClick={() => navigate('/db/userinvoice')}>
                  Invoice
                </MenuItem>
                <MenuItem onClick={() => navigate('/db/userorder')}>
                  ใบออเดอร์
                </MenuItem>
              </SubMenu>

              <SubMenu label="Setting" icon={<SettingsSuggestOutlinedIcon />}>
                <MenuItem onClick={() => navigate('/')}>ทั่วไป</MenuItem>
                <MenuItem onClick={() => navigate('/db/adminexpress')}>
                  ค่าขนส่ง
                </MenuItem>
              </SubMenu>
            </Menu>

            <div
              style={{
                padding: '0 24px',
                marginBottom: '8px',
                marginTop: '32px',
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: isCollapsed ? 0 : 0.5,
                  letterSpacing: '0.5px',
                }}
              >
                Extra
              </Typography>
            </div>

            <Menu>
              <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />}>Documentation</MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
      <main>
        <div style={{ padding: '16px 2px ', color: '#44596e' }}>
          <div style={{ marginBottom: '16px' }}>
            {broken && (
              <IconButton onClick={() => setToggled(!toggled)}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
export default SideBar
