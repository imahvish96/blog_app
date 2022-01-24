import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel'];

export default function ActionCenter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48; 
  console.log('hello')
  return (
    <div>
      <div className="artical-action-wrapper">
        <div className="artical-action">
          <ul>
            <li>
              <IconButton aria-label="save" aria-controls="long-menu" aria-haspopup="true">
                <FavoriteBorderIcon />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="save" aria-controls="long-menu" aria-haspopup="true">
                <AcUnitIcon />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="save" aria-controls="long-menu" aria-haspopup="true">
                <BookmarkBorderIcon />
              </IconButton>
            </li>
            <li>
              <div>
                <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
