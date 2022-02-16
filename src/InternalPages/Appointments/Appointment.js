import { Box } from '@mui/material'
import React from 'react'
import './Appointment.css'
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../../Component/Footer';

function generate(element) {
    return [1,4,2,5,6,7,8,12].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function Appointment() {
    const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
    return (
        <div>
            <ConditionalHeader />

            {/* box */}
            <div className="sortlist">
                <Typography variant="h3" gutterBottom className='m-auto'>
                    All Appointments
                </Typography>
                <List dense={dense}>
                    {generate(
                        <ListItem
                            secondaryAction={
                                <Typography variant="body1" gutterBottom className='center'>
                                    <p className='mb-0'>3:30pm</p>
                                    <span>22/08/20</span>
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="John Doe"
                                secondary='+91 9920092900'
                            />
                            
                        </ListItem>,
                        <Divider />
                    )}
                </List>
            </div>

           <Footer/>
        </div>
    )
}
