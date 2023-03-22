import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between"
})

// Custom styled div to use as search component
const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]:{
		display: 'flex',
	}
}))

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	[theme.breakpoints.up('sm')]:{
		display: 'none',
	}
}))

const Navbar = () => {
	const [open, setOpen] = React.useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography 
					variant="h6" 
					sx={{display:{xs:"none", sm: "block"}}}
				>
					Nathaniel
				</Typography>	
				<Pets sx={{display:{xs:"block", sm: "none"}}}/>
				{/* Check out autocomplete for the search field instead */}
				<Search><InputBase placeholder='Search'/></Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar 
						sx={{width: 30, height: 30}}
						src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						onClick={e => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={e => setOpen(true)}>
					<Avatar 
						sx={{width: 30, height: 30}}
						src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
						/>
					<Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={e=>setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>	
		</AppBar>
	)
}

export default Navbar