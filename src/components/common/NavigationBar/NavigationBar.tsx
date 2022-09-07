import React, { useEffect, useState } from 'react'
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import { Menu, ArrowDropDown } from '@mui/icons-material';
import { useHistory, useLocation } from "react-router-dom";
import './NavigationBar.scss';


interface NavigationBarProps {
    logoUrl: string
    size: "xs" | "sm" | "md" | "lg" | "xl"
    options: NavigationOption[]
}

export interface NavigationOption {
    text: string
    link?: string
    onClick?: (option: NavigationOption) => void
    dropdown?: NavigationOption[]
}

export const NavigationBar: React.FC<NavigationBarProps> = ({logoUrl, size, options}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownAnchor, setDropdownAnchor] = React.useState<null | string>(null);

  let history = useHistory()

    const handleOnClick = (option: NavigationOption, e: React.MouseEvent) => {
      if(option.onClick) {
        option.onClick(option)
        setMenuOpen(false)
      }

      if(option.link) {
        if(option.link.startsWith("http")){
          window.open(option.link)
        }
        else {
          history.push(option.link)
        }
        setMenuOpen(false)
      }

      if(option.dropdown && option.text !== dropdownAnchor) 
        setDropdownAnchor(option.text)
      else closeDropdown()

      e.stopPropagation()
    }

    const closeDropdown = () => {
      setDropdownAnchor(null)
    }

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

    const location = useLocation();

    const isSelected = (option: NavigationOption): boolean => {
      if(location.pathname === option.link) return true
      else if(option.dropdown){
        return option.dropdown.find(opt => isSelected(opt)) !== undefined
      }
      else return false
    }
    
    const getOptionClasses = (option: NavigationOption): string => {
      return "nav-option" + (isSelected(option)? " selected" : "")
    }
    
    useEffect(() => {
      const handleClickOutside = () => {
        if (dropdownAnchor) {
          closeDropdown();
        }
      };

      document.addEventListener("click", handleClickOutside, false);
      return () => {
        document.removeEventListener("click", handleClickOutside, false);
      };
    }, [dropdownAnchor]);
  
    const optionButton = (option: NavigationOption) => {
      return (
        <Button
            className={getOptionClasses(option)}
            key={option.text}
            onClick={(e) => handleOnClick(option, e)}>{option.text}
        </Button>
      )
    }
  
    return (
    <Box className={`NavigationBar nav-${size}`}
        display="flex"
        p={1}
        alignItems="center" 
        justifyContent="space-between">

        <Box 
          className="logo" 
          display={"flex"} 
          style={{backgroundImage: `url(${logoUrl})`}}
          onClick={() => history.push("/") }/>

        <Box className="full-menu">
            {options.map(option => 
              <div className="menu-option" key={option.text}>
                { optionButton(option) }
                { option.dropdown && <ArrowDropDown className="dropdown-icon" />}
                { dropdownAnchor === option.text && 
                  <div className="dropdown">
                    { option.dropdown?.map(optionButton) }
                  </div>}
              </div>
            )}
        </Box>

        <Box className="small-menu" >
          <IconButton onClick={toggleMenu}>
            <Menu style={{fontSize: "2rem", color: "white"}} />
          </IconButton>
          <Drawer 
            className="side-menu"
            anchor={"right"}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}>
            <List>
              {options.map((option) => (<React.Fragment key={option.text}>
                <ListItem button onClick={(e) => handleOnClick(option, e)}>
                  <ListItemText 
                    className={getOptionClasses(option)}
                    primary={option.text.toUpperCase()} />
                  { option.dropdown && <ArrowDropDown className="dropdown-icon" />}
                </ListItem>
                <div className="dropdown-options">
                  { dropdownAnchor === option.text && option.dropdown?.map(dropdown => 
                    <ListItem className="dropdown" button onClick={(e) => handleOnClick(dropdown, e)} key={dropdown.text}>
                      <ListItemText 
                      className={getOptionClasses(dropdown)}
                      primary={dropdown.text.toUpperCase()} />
                    </ListItem>
                  )}
                </div>
              </React.Fragment>))}
            </List>
          </Drawer>
        </Box>
      </Box>
    );

};